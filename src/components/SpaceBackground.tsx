export function SpaceBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#00031f]"> {/* bg-slate-950 */}
      {/* Top Left Glow Bubble */}
      <div 
        className="absolute -top-20 -left-20 w-[70vw] max-w-[600px] h-[70vw] max-h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(2, 6, 23, 0) 70%)',
        }}
      />

      {/* Bottom Right Glow Bubble */}
      <div 
        className="absolute -bottom-20 -right-20 w-[70vw] max-w-[600px] h-[70vw] max-h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.6) 0%, rgba(2, 6, 23, 0) 70%)',
        }}
      />
    </div>
  );
}