"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CloudSun } from "lucide-react";
import { weatherCities } from "@/lib/weather-data";
import { CityCard } from "@/components/city-card";
import { ForecastPanel } from "@/components/forecast-panel";

export default function WeatherPage() {
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const selectedCity = weatherCities.find((c) => c.id === selectedCityId) ?? null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <CloudSun size={32} className="text-amber-500" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">WeatherVibe</h1>
            <p className="text-xs text-muted-foreground">全球城市天气一览</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* City Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              热门城市
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weatherCities.map((city, i) => (
                <CityCard
                  key={city.id}
                  city={city}
                  index={i}
                  isSelected={selectedCityId === city.id}
                  onClick={() => setSelectedCityId(city.id)}
                />
              ))}
            </div>
          </div>

          {/* Forecast Panel */}
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              详细预报
            </h2>
            <div className="lg:sticky lg:top-24">
              <ForecastPanel city={selectedCity} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t py-6 text-center text-sm text-muted-foreground">
        WeatherVibe · 演示项目 · 数据为模拟数据
      </footer>
    </div>
  );
}
