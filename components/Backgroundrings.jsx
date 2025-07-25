const BackgroundRings =()=> {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0">
      <div className="absolute size-[460px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full border-2 border-[#241E38]/5 shadow-[0_0_60px_inset] shadow-purple-300" />
      <div className="absolute size-[730px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full border-2 border-[#241E38]/5 shadow-[0_0_60px_inset] shadow-purple-400" />
      <div className="absolute size-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full border-2 border-[#241E38]/5 shadow-[0_0_60px_inset] shadow-purple-500" />
      <div className="absolute size-[1270px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full border-2 border-[#241E38]/5 shadow-[0_0_60px_inset] shadow-purple-600" />
      <div className="absolute size-[1540px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full border-2 border-[#241E38]/5 shadow-[0_0_60px_inset] shadow-purple-700" />
    </div>
  );
}

export default BackgroundRings;