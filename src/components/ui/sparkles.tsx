"use client";

import React, { useEffect, useRef } from "react";

export const SparklesCore = ({
  className = "w-full h-full",
  particleColor = "#FFFFFF",
  particleDensity = 1200,
  minSize = 0.2,  // smaller particles
  maxSize = 0.6,
  background = "transparent",
  speedMultiplier = 1.5, // faster movement
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = (Math.random() - 0.5) * 1 * speedMultiplier;
        this.speedY = (Math.random() - 0.5) * 1 * speedMultiplier;
        this.alpha = Math.random() * 0.3 + 0.1; // darker, low opacity
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    particles = Array.from({ length: particleDensity }, () => new Particle());

    let animationFrame;
    const animate = () => {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [particleColor, particleDensity, minSize, maxSize, background, speedMultiplier]);

  return <canvas ref={canvasRef} className={className} />;
};
