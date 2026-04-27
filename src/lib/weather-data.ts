export interface WeatherCity {
  id: string;
  name: string;
  nameCn: string;
  temp: number;
  condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  forecast: { day: string; high: number; low: number; condition: WeatherCity["condition"] }[];
}

export const weatherCities: WeatherCity[] = [
  {
    id: "beijing",
    name: "Beijing",
    nameCn: "北京",
    temp: 18,
    condition: "sunny",
    humidity: 32,
    windSpeed: 12,
    feelsLike: 16,
    forecast: [
      { day: "今天", high: 21, low: 12, condition: "sunny" },
      { day: "明天", high: 19, low: 10, condition: "cloudy" },
      { day: "后天", high: 16, low: 8, condition: "rainy" },
      { day: "周四", high: 18, low: 9, condition: "sunny" },
      { day: "周五", high: 22, low: 11, condition: "sunny" },
    ],
  },
  {
    id: "shanghai",
    name: "Shanghai",
    nameCn: "上海",
    temp: 24,
    condition: "cloudy",
    humidity: 68,
    windSpeed: 8,
    feelsLike: 26,
    forecast: [
      { day: "今天", high: 25, low: 19, condition: "cloudy" },
      { day: "明天", high: 23, low: 18, condition: "rainy" },
      { day: "后天", high: 20, low: 16, condition: "rainy" },
      { day: "周四", high: 22, low: 17, condition: "cloudy" },
      { day: "周五", high: 26, low: 19, condition: "sunny" },
    ],
  },
  {
    id: "tokyo",
    name: "Tokyo",
    nameCn: "东京",
    temp: 15,
    condition: "rainy",
    humidity: 82,
    windSpeed: 18,
    feelsLike: 12,
    forecast: [
      { day: "今天", high: 16, low: 13, condition: "rainy" },
      { day: "明天", high: 18, low: 12, condition: "cloudy" },
      { day: "后天", high: 20, low: 14, condition: "sunny" },
      { day: "周四", high: 22, low: 15, condition: "sunny" },
      { day: "周五", high: 19, low: 13, condition: "cloudy" },
    ],
  },
  {
    id: "london",
    name: "London",
    nameCn: "伦敦",
    temp: 9,
    condition: "cloudy",
    humidity: 75,
    windSpeed: 22,
    feelsLike: 6,
    forecast: [
      { day: "今天", high: 11, low: 7, condition: "cloudy" },
      { day: "明天", high: 10, low: 6, condition: "rainy" },
      { day: "后天", high: 12, low: 8, condition: "cloudy" },
      { day: "周四", high: 14, low: 9, condition: "sunny" },
      { day: "周五", high: 11, low: 7, condition: "cloudy" },
    ],
  },
  {
    id: "newyork",
    name: "New York",
    nameCn: "纽约",
    temp: 3,
    condition: "snowy",
    humidity: 55,
    windSpeed: 25,
    feelsLike: -1,
    forecast: [
      { day: "今天", high: 4, low: -2, condition: "snowy" },
      { day: "明天", high: 2, low: -4, condition: "snowy" },
      { day: "后天", high: 6, low: 0, condition: "cloudy" },
      { day: "周四", high: 9, low: 2, condition: "sunny" },
      { day: "周五", high: 11, low: 4, condition: "sunny" },
    ],
  },
  {
    id: "sydney",
    name: "Sydney",
    nameCn: "悉尼",
    temp: 28,
    condition: "sunny",
    humidity: 45,
    windSpeed: 15,
    feelsLike: 30,
    forecast: [
      { day: "今天", high: 30, low: 22, condition: "sunny" },
      { day: "明天", high: 29, low: 21, condition: "sunny" },
      { day: "后天", high: 27, low: 20, condition: "cloudy" },
      { day: "周四", high: 26, low: 19, condition: "stormy" },
      { day: "周五", high: 25, low: 18, condition: "rainy" },
    ],
  },
];

export const conditionConfig: Record<
  WeatherCity["condition"],
  { label: string; labelCn: string; icon: string; bgFrom: string; bgTo: string; textColor: string }
> = {
  sunny: { label: "Sunny", labelCn: "晴朗", icon: "sun", bgFrom: "from-amber-400", bgTo: "to-orange-500", textColor: "text-amber-900" },
  cloudy: { label: "Cloudy", labelCn: "多云", icon: "cloud", bgFrom: "from-slate-300", bgTo: "to-slate-500", textColor: "text-slate-900" },
  rainy: { label: "Rainy", labelCn: "下雨", icon: "cloud-rain", bgFrom: "from-blue-400", bgTo: "to-slate-600", textColor: "text-blue-900" },
  snowy: { label: "Snowy", labelCn: "下雪", icon: "snowflake", bgFrom: "from-sky-200", bgTo: "to-blue-400", textColor: "text-sky-900" },
  stormy: { label: "Stormy", labelCn: "雷雨", icon: "cloud-lightning", bgFrom: "from-slate-600", bgTo: "to-violet-700", textColor: "text-violet-100" },
};
