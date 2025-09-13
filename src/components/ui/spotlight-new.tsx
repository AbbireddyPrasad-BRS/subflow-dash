"use client";
import React, { useEffect, useRef } from "react";

export const SpotlightNew: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Spotlight particles
    const spots: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
      opacity: number;
      dOpacity: number;
    }[] = [];

    const colors = [
      "rgba(0,255,255,",
      "rgba(255,0,255,",
      "rgba(255,255,0,",
      "rgba(0,255,0,"
    ];

    for (let i = 0; i < 8; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      spots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 150 + Math.random() * 200,
        dx: (Math.random() - 0.5) * 0.2, // slower, subtle movement
        dy: (Math.random() - 0.5) * 0.2,
        color,
        opacity: 0.1 + Math.random() * 0.15, // initial opacity
        dOpacity: (Math.random() - 0.5) * 0.005, // subtle opacity flicker
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spots.forEach((spot) => {
        const gradient = ctx.createRadialGradient(
          spot.x,
          spot.y,
          0,
          spot.x,
          spot.y,
          spot.radius
        );
        gradient.addColorStop(0, `${spot.color}${spot.opacity})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move spot
        spot.x += spot.dx;
        spot.y += spot.dy;

        // Bounce off edges
        if (spot.x < 0 || spot.x > canvas.width) spot.dx *= -1;
        if (spot.y < 0 || spot.y > canvas.height) spot.dy *= -1;

        // Flicker opacity
        spot.opacity += spot.dOpacity;
        if (spot.opacity < 0.05 || spot.opacity > 0.25) spot.dOpacity *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};
