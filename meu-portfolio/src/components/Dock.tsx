"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import "./Dock.css";

type DockItemData = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  className?: string;
};

type DockSpring = {
  mass: number;
  stiffness: number;
  damping: number;
};

type DockProps = {
  items?: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: DockSpring;
};

const defaultSpring = { mass: 0.1, stiffness: 150, damping: 12 };

function DockItem({
  item,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: {
  item: DockItemData;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  spring: DockSpring;
  distance: number;
  magnification: number;
  baseItemSize: number;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseDistance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    return rect ? x - rect.left - rect.width / 2 : Infinity;
  });
  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={item.label}
      onClick={item.onClick}
      className={`dock-item ${item.className ?? ""}`}
      style={{ width: reducedMotion ? baseItemSize : size, height: reducedMotion ? baseItemSize : size }}
    >
      <span className="dock-icon" aria-hidden="true">{item.icon}</span>
      <span className="dock-label" aria-hidden="true">{item.label}</span>
    </motion.button>
  );
}

export default function Dock({
  items = [],
  className = "",
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
  dockHeight = 256,
  magnification = 70,
  spring = defaultSpring,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const height = Math.max(dockHeight, magnification + magnification / 2 + 4);

  return (
    <nav className="dock-outer" style={{ height }} aria-label="Navegação principal">
      <div
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item) => (
          <DockItem
            key={item.label}
            item={item}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
      </div>
    </nav>
  );
}
