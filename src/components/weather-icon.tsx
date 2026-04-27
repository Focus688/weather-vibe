"use client";

import { Sun, Cloud, CloudRain, Snowflake, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";

type Condition = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";

interface WeatherIconProps {
  condition: Condition;
  size?: number;
  animate?: boolean;
}

export function WeatherIcon({ condition, size = 48, animate = true }: WeatherIconProps) {
  const icons = {
    sunny: <Sun size={size} className="text-amber-500" />,
    cloudy: <Cloud size={size} className="text-slate-500" />,
    rainy: <CloudRain size={size} className="text-blue-500" />,
    snowy: <Snowflake size={size} className="text-sky-400" />,
    stormy: <CloudLightning size={size} className="text-violet-500" />,
  };

  if (!animate) return icons[condition];

  return (
    <motion.div
      animate={
        condition === "sunny"
          ? { rotate: [0, 360] }
          : condition === "snowy"
          ? { rotate: [0, 10, -10, 0] }
          : { y: [0, -4, 0] }
      }
      transition={
        condition === "sunny"
          ? { duration: 12, repeat: Infinity, ease: "linear" }
          : { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {icons[condition]}
    </motion.div>
  );
}
