import { useEffect, useState } from "react";
import { Weather } from "../domain/weather/weatherApiTypes";
import { weatherService } from "../domain/weather/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState<Weather>({} as Weather);

  const loadWeather = async () => {
    const data = await weatherService.getWeather();

    if (data) {
      setWeather(data);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  return { weather };
}
