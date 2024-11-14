export type NewsType = {
  id: number;
  title: string;
  author: string;
  date: string;
  shortContent: string;
  category: string;
  image: string;
};

export type CompleteNews = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  category: string;
  image: string;
};

export type GetNewsApiResponse = {
  data: NewsType[];
};

export type GetCompleteNewsApiRequest = {
  newsId: number;
};

export type GetCompleteNewsApiResponse = {
  data: CompleteNews;
};
