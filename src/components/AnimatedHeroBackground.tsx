import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/heroAnimation.css';

interface Star {
  id: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export default function AnimatedHeroBackground() {
  const { isDark } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isDark) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize stars
    const initStars = () => {
      starsRef.current = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.8, // keep mostly in upper portion
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };
    initStars();

    // Animation loop
    const animate = () => {
      // Clear canvas with midnight-blue gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0f1b3c');
      gradient.addColorStop(0.5, '#1a2847');
      gradient.addColorStop(1, '#0f1b3c');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges with some margin
        const margin = 50;
        if (star.x < -margin) star.x = canvas.width + margin;
        if (star.x > canvas.width + margin) star.x = -margin;
        if (star.y < -margin) star.y = canvas.height + margin;
        if (star.y > canvas.height + margin) star.y = -margin;

        // Draw star with glow
        ctx.fillStyle = `rgba(147, 197, 253, ${0.6 + Math.sin(Date.now() * 0.001 + star.id) * 0.4})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add faint glow
        ctx.fillStyle = `rgba(147, 197, 253, ${(0.2 + Math.sin(Date.now() * 0.0005 + star.id) * 0.15) * 0.3})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw faint connecting lines between nearby stars
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i];
          const star2 = starsRef.current[j];
          const dx = star2.x - star1.x;
          const dy = star2.y - star1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isDark]);

  return (
    <>
      {isDark && (
        <canvas
          ref={canvasRef}
          className="hero-animation-canvas absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />
      )}
    </>
  );
}
