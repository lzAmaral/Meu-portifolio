"use client";

import { memo, useEffect, useId, useRef } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

type Dot = {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
};

type DotFieldProps = {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  className?: string;
};

const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 14,
  cursorRadius = 500,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 67,
  glowRadius = 160,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "rgba(168, 85, 247, 0.35)",
  gradientTo = "rgba(180, 151, 207, 0.25)",
  glowColor = "#120F17",
  className = "",
}: DotFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const glowId = useId().replace(/:/g, "");

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!container || !canvas || !context) return;

    const ctx = context;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 };
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let engagement = 0;
    let glowOpacity = 0;
    let raf = 0;
    let visible = false;

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const step = Math.max(dotRadius + dotSpacing, 2);
      const cols = Math.floor(width / step);
      const rows = Math.floor(height / step);
      const padX = (width % step) / 2;
      const padY = (height % step) / 2;
      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots.push({ ax, ay, sx: ax, sy: ay, vx: 0, vy: 0 });
        }
      }
      if (reducedMotion.matches || !visible) draw();
    }

    function onPointerMove(event: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function draw() {
      frame++;
      const dx = mouse.prevX - mouse.x;
      const dy = mouse.prevY - mouse.y;
      const distance = Math.hypot(dx, dy);
      mouse.speed += (distance - mouse.speed) * 0.5;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      const targetEngagement = Math.min(mouse.speed / 5, 1);
      engagement += (targetEngagement - engagement) * 0.06;
      glowOpacity += (engagement - glowOpacity) * 0.08;
      if (glow) {
        glow.setAttribute("cx", String(mouse.x));
        glow.setAttribute("cy", String(mouse.y));
        glow.style.opacity = String(glowOpacity);
      }

      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientFrom);
      gradient.addColorStop(1, gradientTo);
      ctx.fillStyle = gradient;
      ctx.beginPath();

      const radius = dotRadius / 2;
      const cursorRadiusSq = cursorRadius * cursorRadius;
      const time = frame * 0.02;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const offsetX = mouse.x - dot.ax;
        const offsetY = mouse.y - dot.ay;
        const distanceSq = offsetX * offsetX + offsetY * offsetY;

        if (!reducedMotion.matches && distanceSq < cursorRadiusSq && engagement > 0.01) {
          const distanceToCursor = Math.max(Math.sqrt(distanceSq), 1);
          const angle = Math.atan2(offsetY, offsetX);
          if (bulgeOnly) {
            const falloff = 1 - distanceToCursor / cursorRadius;
            const push = falloff * falloff * bulgeStrength * engagement;
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const move = (500 / distanceToCursor) * (mouse.speed * cursorForce);
            dot.vx -= Math.cos(angle) * move;
            dot.vy -= Math.sin(angle) * move;
          }
        } else if (bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }

        if (!bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.sx += (dot.ax + dot.vx - dot.sx) * 0.1;
          dot.sy += (dot.ay + dot.vy - dot.sy) * 0.1;
        }

        let x = dot.sx;
        let y = dot.sy;
        if (waveAmplitude > 0 && !reducedMotion.matches) {
          y += Math.sin(dot.ax * 0.03 + time) * waveAmplitude;
          x += Math.cos(dot.ay * 0.03 + time * 0.7) * waveAmplitude * 0.5;
        }
        const hash = ((i * 2654435761) ^ (frame >> 3)) >>> 0;
        const sparkling = sparkle && hash % 100 < 3;
        const drawRadius = sparkling ? radius * 1.8 : radius;
        ctx.moveTo(x + drawRadius, y);
        ctx.arc(x, y, drawRadius, 0, TWO_PI);
      }
      ctx.fill();
    }

    function tick() {
      draw();
      raf = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(raf);
      if (visible && !reducedMotion.matches) tick();
      else draw();
    }

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    reducedMotion.addEventListener("change", syncAnimation);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      reducedMotion.removeEventListener("change", syncAnimation);
    };
  }, [dotRadius, dotSpacing, cursorRadius, cursorForce, bulgeOnly, bulgeStrength, sparkle, waveAmplitude, gradientFrom, gradientTo]);

  return (
    <div ref={containerRef} className={`dot-field-container ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} />
      <svg>
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle ref={glowRef} cx="-9999" cy="-9999" r={glowRadius} fill={`url(#${glowId})`} />
      </svg>
    </div>
  );
});

export default DotField;
