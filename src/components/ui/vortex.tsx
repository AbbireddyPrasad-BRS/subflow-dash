// src/components/ui/vortex.tsx
import React, { useRef, useEffect } from "react";

interface VortexProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export const Vortex: React.FC<VortexProps> = ({
  children,
  backgroundColor = "black",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
    }[] = [];

    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 0.02 + 0.01,
      });
    }

    const draw = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.angle += p.speed;
        const spiralRadius = p.radius * 50;
        p.x = width / 2 + Math.cos(p.angle) * spiralRadius;
        p.y = height / 2 + Math.sin(p.angle) * spiralRadius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 200, 255, 0.7)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [backgroundColor]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
