import React, { Suspense, useEffect } from "react";
import { useNews } from "../useCase/useNews";
import { useParams } from "react-router-dom";
// const Ads = React.lazy(() => import('ads/Ads'))

export function NewsDetails() {
  const { newsId } = useParams();

  const { completeNews, loadCompleteNews } = useNews();
  const { title, content, image } = completeNews;

  useEffect(() => {
    loadCompleteNews({ newsId: Number(newsId) });
  }, [loadCompleteNews, newsId]);

  return (
    <div className="gap-10 flex flex-col max-w-7xl justify-center items-center">
      <h1 className="flex justify-center font-bold text-primary-color text-4xl max-w-4xl">
        {title}
      </h1>
      <div>
        <img
          className="rounded-3xl bg-slate-600 min-w-[50rem] w-2/3 h-96"
          src={image}
          alt="news details"
        />
      </div>
      <span className="max-w-4xl h-max text-xl flex">{content}</span>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Ads />
      </Suspense> */}
    </div>
  );
}
