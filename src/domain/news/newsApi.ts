import { api } from "../../service/api";
import {
  GetCompleteNewsApiRequest,
  GetCompleteNewsApiResponse,
  GetNewsApiResponse,
} from "./newsApiTypes";

const getNews = async (): Promise<GetNewsApiResponse> => {
  const { data } = await api.get<GetNewsApiResponse>("/api/news");

  return data;
};

const getCompleteNews = async ({
  newsId,
}: GetCompleteNewsApiRequest): Promise<GetCompleteNewsApiResponse> => {
  const { data } = await api.get<GetCompleteNewsApiResponse>(
    `/api/news/${newsId}`
  );

  return data;
};

export const newsApi = {
  getNews,
  getCompleteNews,
};
