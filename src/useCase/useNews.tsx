import { useEffect, useState } from "react";
import { CompleteNews, NewsType } from "../domain/news/newsApiTypes";
import { newsService } from "../domain/news/newsService";

export function useNews() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [completeNews, setCompleteNews] = useState<CompleteNews>(
    {} as CompleteNews
  );

  const loadNews = async () => {
    const data = await newsService.getNews();

    if (data) {
      setNews(data);
    }
  };

  const loadCompleteNews = async ({ newsId }: { newsId: number }) => {
    const data = await newsService.getCompleteNews({ newsId });

    setCompleteNews(data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return {
    news,
    loadCompleteNews,
    completeNews,
  };
}
