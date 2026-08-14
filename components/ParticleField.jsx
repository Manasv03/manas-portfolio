"use client";
import { useEffect, useRef } from 'react';

// Drifting glowing particle field.
// Dark Mode: Bright glowing violet/blue particles against dark background.
// Light Mode: Rich dark violet/indigo/blue particles with identical contrast ratio,
// opacity range (0.10–0.28), radius (2.5–6px), glow factor (r*5), and movement speed.

const PARTICLE_COUNT = 45;

// Brighter glowing tones for dark background
const COLORS_DARK = [
  [167, 139, 250],   // purple-400
  [139,  92, 246],   // violet-500
  [196, 181, 253],   // purple-300
  [124,  58, 237],   // violet-600
  [ 99, 102, 241],   // indigo-500
  [ 59, 130, 246],   // blue-500
];

// Darker rich tones for light background to match exact contrast ratio
const COLORS_LIGHT = [
  [109,  40, 217],   // violet-700
  [126,  34, 206],   // purple-700
  [ 79,  70, 229],   // indigo-600
  [ 67,  56, 202],   // indigo-700
  [ 30,  58, 138],   // blue-900
];

function initParticles(w, h, isDark) {
  const colors = isDark ? COLORS_DARK : COLORS_LIGHT;
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const c = colors[Math.floor(Math.random() * colors.length)];
    return {
      x:  Math.random() * w,
      y:  Math.random() * h,
      r:  2.5 + Math.random() * 3.5,
      // Identical opacity scale for equal contrast ratio in both modes
      baseOpacity: 0.10 + Math.random() * 0.18,
      dx: (Math.random() - 0.5) * 0.45,
      dy: (Math.random() - 0.5) * 0.45,
      r_color: c[0], g_color: c[1], b_color: c[2],
      pulseT:     Math.random() * Math.PI * 2,
      pulseSpeed: 0.008 + Math.random() * 0.012,
    };
  });
}

export default function ParticleField() {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], raf: null, reduced: false, isDark: false });

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    stateRef.current.reduced = rm.matches;
    const onRm = (e) => { stateRef.current.reduced = e.matches; };
    rm.addEventListener('change', onRm);

    const detectDark = () => document.documentElement.classList.contains('dark');
    stateRef.current.isDark = detectDark();

    const observer = new MutationObserver(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      stateRef.current.isDark = detectDark();
      stateRef.current.particles = initParticles(canvas.width, canvas.height, stateRef.current.isDark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      stateRef.current.particles = initParticles(canvas.width, canvas.height, stateRef.current.isDark);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { particles, reduced } = stateRef.current;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        if (!reduced) {
          p.x += p.dx;
          p.y += p.dy;
          p.pulseT += p.pulseSpeed;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }

        const opacity = reduced
          ? p.baseOpacity * 0.5
          : p.baseOpacity * (0.7 + 0.3 * Math.sin(p.pulseT));

        const r = p.r_color, g = p.g_color, b = p.b_color;
        // Identical glow radius ratio (5x dot radius) in both light and dark mode
        const glowR = p.r * 5;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0,   `rgba(${r},${g},${b},${opacity.toFixed(3)})`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},${(opacity * 0.55).toFixed(3)})`);
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      stateRef.current.raf = requestAnimationFrame(draw);
    };

    stateRef.current.raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(stateRef.current.raf);
      window.removeEventListener('resize', resize);
      rm.removeEventListener('change', onRm);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
