"use client";

import { motion } from "framer-motion";
import { Droplets, Wind, Thermometer } from "lucide-react";
import { WeatherIcon } from "./weather-icon";
import { type WeatherCity, conditionConfig } from "@/lib/weather-data";

interface CityCardProps {
  city: WeatherCity;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export function CityCard({ city, index, isSelected, onClick }: CityCardProps) {
  const config = conditionConfig[city.condition];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        cursor-pointer rounded-2xl p-5 transition-all duration-300
        bg-gradient-to-br ${config.bgFrom} ${config.bgTo}
        ${isSelected ? "ring-3 ring-white/50 shadow-xl shadow-black/20" : "shadow-md"}
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`text-lg font-bold ${config.textColor}`}>{city.nameCn}</h3>
          <p className={`text-xs opacity-70 ${config.textColor}`}>{city.name}</p>
        </div>
        <WeatherIcon condition={city.condition} size={40} />
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-4xl font-bold ${config.textColor}`}>{city.temp}°</span>
        <span className={`text-sm opacity-70 ${config.textColor}`}>{config.labelCn}</span>
      </div>

      <div className={`mt-3 flex gap-3 text-xs opacity-80 ${config.textColor}`}>
        <span className="flex items-center gap-1">
          <Thermometer size={12} /> 体感 {city.feelsLike}°
        </span>
        <span className="flex items-center gap-1">
          <Droplets size={12} /> {city.humidity}%
        </span>
        <span className="flex items-center gap-1">
          <Wind size={12} /> {city.windSpeed}km/h
        </span>
      </div>
    </motion.div>
  );
}
