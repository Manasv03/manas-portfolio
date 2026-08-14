"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';

// ─── constants ────────────────────────────────────────────────────────────────
const OFFSET_X = 28;          // bird sits right-and-above the cursor
const OFFSET_Y = -42;
const LERP     = 0.10;        // spring fraction per frame
const IDLE_MS  = 2400;
const CLAMP    = 48;

const MESSAGES = ['Squawk! 🦜', 'Hey! 👋', 'Watch out! 😤', 'Raawk! 🐦', "I see you... 👁️"];

function lerp(a, b, t) { return a + (b - a) * t; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// ─── Compact Cute Blue Bird SVG (Original Structure & Size: 56x56) ───────────
const BirdSVG = React.forwardRef((_, ref) => (
  <svg
    ref={ref}
    id="bird-svg"
    viewBox="0 0 60 60"
    width="56"
    height="56"
    style={{
      transformOrigin: '28px 30px',
      filter: 'drop-shadow(0 4px 10px rgba(37,99,235,0.55))',
      overflow: 'visible',
    }}
  >
    {/* ── tail feathers ── */}
    <path d="M14,42 Q3,58 0,65 Q9,54 17,48" fill="#1D4ED8" opacity="0.85"/>
    <path d="M11,45 Q0,62 -2,70 Q8,57 15,52" fill="#2563EB" opacity="0.65"/>

    {/* ── body ── */}
    <ellipse cx="30" cy="37" rx="16" ry="13" fill="#3B82F6"/>

    {/* ── wing (flaps via RAF) ── */}
    <g id="bird-wing" style={{ transformOrigin: '30px 33px' }}>
      <path d="M30,33 Q12,18 21,44 Q25,39 30,33" fill="#60A5FA"/>
    </g>
    {/* ── wing tip (slight lag behind primary) ── */}
    <g id="bird-wingtip" style={{ transformOrigin: '30px 37px' }}>
      <path d="M30,37 Q14,25 23,47 Q26,43 30,37" fill="#93C5FD" opacity="0.55"/>
    </g>

    {/* ── head ── */}
    <circle cx="41" cy="26" r="12" fill="#3B82F6"/>

    {/* ── crest ── */}
    <path d="M41,14 Q37,7 39,4 Q41,9 43,7 Q43,12 41,14" fill="#1D4ED8"/>

    {/* ── eye ── */}
    <circle cx="45" cy="24" r="5"   fill="#1E3A8A"/>
    <circle cx="45" cy="24" r="3.2" fill="#1E40AF"/>
    <circle cx="45.5" cy="23.2" r="1.8" fill="#111827"/>
    <circle cx="46.2" cy="22.5" r="0.7" fill="white"/>

    {/* ── cheek patch ── */}
    <ellipse cx="43" cy="28" rx="4" ry="2.5" fill="#DBEAFE" opacity="0.45"/>

    {/* ── beak ── */}
    <path d="M51,21 Q62,25 57,31 Q49,29 51,21" fill="#F59E0B"/>
    <path d="M51,25 Q59,27 56,30 Q50,28 51,25" fill="#D97706"/>

    {/* ── belly ── */}
    <ellipse cx="32" cy="42" rx="10" ry="7" fill="#BFDBFE" opacity="0.38"/>

    {/* ── feet ── */}
    <g opacity="0.7" stroke="#F59E0B" strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M26,49 Q23,53 21,54 M26,49 Q24,54 23,56 M26,49 Q26,54 28,56"/>
      <path d="M34,50 Q31,54 29,55 M34,50 Q32,55 31,57 M34,50 Q35,55 36,55"/>
    </g>
  </svg>
));
BirdSVG.displayName = 'BirdSVG';

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Mascot({ isMenuOpen }) {
  // ── touch & reduced-motion detection ──
  const [skip, setSkip] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const checkSkip = () => {
      const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isSmall = window.innerWidth < 1024;
      setSkip(isTouch || isSmall);
    };
    checkSkip();
    window.addEventListener('resize', checkSkip);

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(rm.matches);
    const onRm = (e) => setReduced(e.matches);
    rm.addEventListener('change', onRm);
    return () => {
      window.removeEventListener('resize', checkSkip);
      rm.removeEventListener('change', onRm);
    };
  }, []);

  // ── DOM refs ──
  const birdRef = useRef(null);
  const svgRef  = useRef(null);

  // ── mutable animation state ──
  const state = useRef({
    x: -200, y: -200,
    tx: -200, ty: -200,
    vx: 0, vy: 0,
    bobT: 0,
    wingT: 0,
    lastMove: Date.now() - IDLE_MS - 1,
    opacity: 0,
    pageClickScale: 0,
    startledScale: 0,
    startledRotate: 0,
    facingRight: true,
  });
  const rafRef  = useRef(null);
  const idleRef = useRef(null);

  // ── tooltip state ──
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  // ─── mouse move ───
  const handleMouseMove = useCallback((e) => {
    const s = state.current;
    s.tx = clamp(e.clientX + OFFSET_X, CLAMP, window.innerWidth  - CLAMP);
    s.ty = clamp(e.clientY + OFFSET_Y, CLAMP, window.innerHeight - CLAMP);
    s.lastMove = Date.now();

    clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => {
      state.current.lastMove = Date.now() - IDLE_MS - 100;
    }, IDLE_MS);
  }, []);

  // ─── page click (bounce) ───
  const handlePageClick = useCallback((e) => {
    if (birdRef.current && birdRef.current.contains(e.target)) return;
    state.current.pageClickScale = 1.0;
  }, []);

  // ─── bird click (startle) ───
  const handleBirdClick = useCallback((e) => {
    e.stopPropagation();
    const s = state.current;
    s.startledScale  = 1.0;
    s.startledRotate = 1.0;
    const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setTooltip({ visible: true, text: msg, x: s.x, y: s.y });
    setTimeout(() => setTooltip(t => ({ ...t, visible: false })), 1500);
  }, []);

  // ─── RAF loop (smooth 60fps engine) ───
  useEffect(() => {
    if (skip) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click',     handlePageClick);

    const s = state.current;
    s.tx = window.innerWidth * 0.85;
    s.ty = window.innerHeight * 0.15;
    s.x  = s.tx;
    s.y  = s.ty;

    const frame = () => {
      const el  = birdRef.current;
      const svg = svgRef.current;
      if (!el || !svg) { rafRef.current = requestAnimationFrame(frame); return; }

      const lerpT  = reduced ? 0.04 : LERP;
      const isIdle = (Date.now() - s.lastMove) > IDLE_MS;

      // ── spring / lerp ──
      const prevX = s.x;
      const prevY = s.y;
      s.x = lerp(s.x, s.tx, lerpT);
      s.y = lerp(s.y, s.ty, lerpT);
      s.vx = s.x - prevX;
      s.vy = s.y - prevY;

      // ── opacity ──
      s.opacity = lerp(s.opacity, isIdle ? 0 : 1, 0.04);

      // ── facing direction ──
      if (Math.abs(s.vx) > 0.05) s.facingRight = s.vx > 0;

      // ── animation timers ──
      const speed     = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const wingSpeed = reduced ? 0.02 : Math.max(0.035, Math.min(0.16, speed * 0.025 + 0.035));
      s.wingT += wingSpeed;
      s.bobT  += 0.022;

      // ── reaction decay ──
      s.pageClickScale  = Math.max(0, s.pageClickScale  - 0.05);
      s.startledScale   = Math.max(0, s.startledScale   - 0.03);
      s.startledRotate  = Math.max(0, s.startledRotate  - 0.03);

      // ── derived values ──
      const bob          = Math.sin(s.bobT) * 5;
      const wingAng      = Math.sin(s.wingT * Math.PI * 2) * 35;
      const bank         = reduced ? 0 : clamp(s.vx * 0.6 + s.vy * 0.25, -20, 20);
      const clickBump    = Math.sin(s.pageClickScale  * Math.PI) * 0.35;
      const startledBump = Math.sin(s.startledScale   * Math.PI) * 0.55;
      const startledSpin = Math.sin(s.startledRotate  * Math.PI * 3) * 28;
      const totalScale   = 1 + clickBump + startledBump;
      const totalRotate  = bank + startledSpin;

      // ── write to DOM ──
      el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      el.style.opacity   = String(s.opacity);

      svg.style.transform =
        `translateY(${bob}px) ` +
        `scaleX(${s.facingRight ? 1 : -1}) ` +
        `rotate(${totalRotate}deg) ` +
        `scale(${totalScale})`;

      const wingEl = el.querySelector('#bird-wing');
      if (wingEl) wingEl.style.transform = `rotate(${wingAng}deg)`;

      const tipEl = el.querySelector('#bird-wingtip');
      if (tipEl) tipEl.style.transform = `rotate(${wingAng * 0.55}deg)`;

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click',     handlePageClick);
      clearTimeout(idleRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip, reduced]);

  if (skip)       return null;
  if (isMenuOpen) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9990 }}>
        <div
          ref={birdRef}
          id="mascot-bird-hitbox"
          onClick={handleBirdClick}
          className="absolute top-0 left-0 w-14 h-14"
          style={{ pointerEvents: 'none', willChange: 'transform, opacity' }}
        >
          <BirdSVG ref={svgRef} />
        </div>
      </div>

      {tooltip.visible && (
        <div
          className="fixed pointer-events-none z-[9995] bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-blue-200 dark:border-blue-700 whitespace-nowrap"
          style={{ left: tooltip.x - 16, top: tooltip.y - 46, animation: 'mascot-popup 0.3s ease-out' }}
        >
          {tooltip.text}
        </div>
      )}

      <style>{`
        @keyframes mascot-popup {
          from { opacity: 0; transform: translateY(8px) scale(0.85); }
          to   { opacity: 1; transform: translateY(0)  scale(1); }
        }
      `}</style>
    </>
  );
}
