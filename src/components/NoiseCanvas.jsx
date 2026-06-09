import React, { useEffect, useRef } from "react";


export default function NoiseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let particles = [];
    let frame = 0;

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: Math.min(90, Math.floor(window.innerWidth / 16)) }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.9 + 0.3,
        s: Math.random() * 0.34 + 0.08,
        a: Math.random() * 0.32 + 0.08
      }));
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => {
        particle.y -= particle.s;
        if (particle.y < -10) {
          particle.y = window.innerHeight + 10;
          particle.x = Math.random() * window.innerWidth;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 130, 46, ${particle.a})`;
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas id="noise-canvas" ref={canvasRef} aria-hidden="true" />;
}
