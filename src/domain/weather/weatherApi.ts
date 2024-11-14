import { api } from "../../service/api";
import { GetWeatherApiResponse } from "./weatherApiTypes";

const getWeather = async (): Promise<GetWeatherApiResponse> => {
  const { data } = await api.get<GetWeatherApiResponse>("/api/weather");

  return data;
};

export const weatherApi = {
  getWeather,
};
