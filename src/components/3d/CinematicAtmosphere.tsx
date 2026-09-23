import React, { useEffect, useRef } from 'react';

interface CinematicAtmosphereProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CinematicAtmosphere: React.FC<CinematicAtmosphereProps> = ({
  className = '',
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      // Very gentle normalized coordinates (-1 to 1)
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!isTouch && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cinematic Volumetric Light Blobs
    const lights = [
      // 1. Primary Deep Electric Blue Diffusion (Top-Center)
      {
        baseX: 0.5,
        baseY: 0.15,
        radius: 0.55,
        colorStop0: 'rgba(37, 99, 235, 0.18)',
        colorStop1: 'rgba(30, 58, 138, 0.08)',
        colorStop2: 'rgba(5, 8, 22, 0)',
        speedX: 0.0003,
        speedY: 0.00025,
        phase: 0
      },
      // 2. Soft Violet / Purple Atmospheric Mass (Right-Center)
      {
        baseX: 0.82,
        baseY: 0.45,
        radius: 0.48,
        colorStop0: 'rgba(139, 92, 246, 0.14)',
        colorStop1: 'rgba(91, 33, 182, 0.06)',
        colorStop2: 'rgba(5, 8, 22, 0)',
        speedX: 0.0002,
        speedY: 0.00035,
        phase: Math.PI / 3
      },
      // 3. Cyan Volumetric Accent (Left-Lower)
      {
        baseX: 0.18,
        baseY: 0.65,
        radius: 0.42,
        colorStop0: 'rgba(56, 189, 248, 0.12)',
        colorStop1: 'rgba(2, 132, 199, 0.05)',
        colorStop2: 'rgba(5, 8, 22, 0)',
        speedX: 0.00025,
        speedY: 0.0002,
        phase: Math.PI / 1.5
      },
      // 4. Subtle Emerald / Mint Undertone (Bottom-Center for Innovex synergy)
      {
        baseX: 0.45,
        baseY: 0.85,
        radius: 0.38,
        colorStop0: 'rgba(16, 185, 129, 0.08)',
        colorStop1: 'rgba(5, 150, 105, 0.03)',
        colorStop2: 'rgba(5, 8, 22, 0)',
        speedX: 0.00018,
        speedY: 0.00028,
        phase: Math.PI
      }
    ];

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      // Clear with base deep obsidian tone
      ctx.fillStyle = '#050816';
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse lerping (extremely subtle offset)
      mouseX += (targetMouseX - mouseX) * 0.02;
      mouseY += (targetMouseY - mouseY) * 0.02;

      time += prefersReducedMotion ? 0 : 1;

      // Draw each volumetric light mass with smooth organic harmonic movement
      for (let i = 0; i < lights.length; i++) {
        const l = lights[i];
        const harmonicX = Math.sin(time * l.speedX + l.phase) * 0.08;
        const harmonicY = Math.cos(time * l.speedY + l.phase) * 0.06;

        // Apply mouse parallax only on desktop
        const parallaxX = mouseX * 0.04 * (i + 1) * 0.5;
        const parallaxY = mouseY * 0.04 * (i + 1) * 0.5;

        const posX = (l.baseX + harmonicX + parallaxX) * width;
        const posY = (l.baseY + harmonicY + parallaxY) * height;
        const rad = l.radius * Math.max(width, height);

        const grad = ctx.createRadialGradient(posX, posY, 0, posX, posY, rad);
        grad.addColorStop(0, l.colorStop0);
        grad.addColorStop(0.5, l.colorStop1);
        grad.addColorStop(1, l.colorStop2);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`cinematic-atmosphere-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      }}
    >
      {/* Procedural Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />

      {/* Layer 3: Ultra-Fine Cinematic Film Grain & Micro-Mesh Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0),
            radial-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 0)
          `,
          backgroundSize: '24px 24px, 48px 48px',
          backgroundPosition: '0 0, 12px 12px',
          opacity: 0.7,
          mixBlendMode: 'screen'
        }}
      />

      {/* Vignette Edge Shading */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 50%, rgba(3, 7, 18, 0.6) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};
