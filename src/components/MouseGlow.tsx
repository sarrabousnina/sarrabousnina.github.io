import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl transition-transform duration-200"
      style={{
        background: "radial-gradient(circle, hsl(276 100% 57% / 0.6), transparent 60%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      }}
    />
  );
};
export default MouseGlow;
