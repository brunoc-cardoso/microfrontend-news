export type WeatherClimate = "cloudy" | "rainy" | "sunny";

export type Weather = {
  temperature: {
    max: number;
    min: number;
  };
  probabilityOfRain: number;
  morning: {
    climate: WeatherClimate;
  };
  afternoon: {
    climate: WeatherClimate;
  };
  night: {
    climate: WeatherClimate;
  };
  averageClimate: WeatherClimate;
};

export type GetWeatherApiResponse = {
  data: Weather;
};
