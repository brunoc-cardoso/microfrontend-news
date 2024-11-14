import { newsApi } from "./newsApi";
import {
  CompleteNews,
  GetCompleteNewsApiRequest,
  NewsType,
} from "./newsApiTypes";

const getNews = async (): Promise<NewsType[]> => {
  const { data } = await newsApi.getNews();

  return data;
};

const getCompleteNews = async ({
  newsId,
}: GetCompleteNewsApiRequest): Promise<CompleteNews> => {
  const { data } = await newsApi.getCompleteNews({ newsId });

  return data;
};

export const newsService = {
  getNews,
  getCompleteNews,
};
