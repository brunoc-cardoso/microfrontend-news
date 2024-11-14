import { weatherApi } from "./weatherApi";
import { Weather } from "./weatherApiTypes";

const getWeather = async (): Promise<Weather> => {
  const { data } = await weatherApi.getWeather();

  return data;
};

export const weatherService = {
  getWeather,
};
