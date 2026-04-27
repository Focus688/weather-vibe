"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { WeatherIcon } from "./weather-icon";
import { type WeatherCity, conditionConfig } from "@/lib/weather-data";

interface ForecastPanelProps {
  city: WeatherCity | null;
}

export function ForecastPanel({ city }: ForecastPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {city ? (
        <motion.div
          key={city.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-card border p-6 shadow-lg"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{city.nameCn}</h2>
              <p className="text-sm text-muted-foreground">未来5天预报</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{city.temp}°</div>
              <div className="text-sm text-muted-foreground">
                {conditionConfig[city.condition].labelCn}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {city.forecast.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 text-sm font-medium">{day.day}</span>
                  <WeatherIcon condition={day.condition} size={24} animate={false} />
                  <span className="text-xs text-muted-foreground">
                    {conditionConfig[day.condition].labelCn}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm font-semibold text-red-500">
                    <TrendingUp size={14} />
                    {day.high}°
                  </span>
                  <span className="flex items-center gap-1 text-sm text-blue-500">
                    <TrendingDown size={14} />
                    {day.low}°
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "体感温度", value: `${city.feelsLike}°`, sub: city.feelsLike > city.temp ? "偏热" : "偏冷" },
              { label: "湿度", value: `${city.humidity}%`, sub: city.humidity > 70 ? "潮湿" : city.humidity < 40 ? "干燥" : "舒适" },
              { label: "风速", value: `${city.windSpeed} km/h`, sub: city.windSpeed > 20 ? "大风" : "微风" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-muted/50 p-3 text-center">
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="mt-1 text-lg font-semibold">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full min-h-[400px] items-center justify-center rounded-3xl border border-dashed p-8 text-center text-muted-foreground"
        >
          <div>
            <div className="mb-2 text-4xl">🌤️</div>
            <p>选择一个城市查看详细天气</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
