import React, { useEffect } from "react";
import { MainNews } from "../components/MainNews";
import { NewsPreview } from "../components/NewsPreview";
import { useNews } from "../useCase/useNews";
// const Weather = React.lazy(() => import('weather/Weather'))
// const Ads = React.lazy(() => import('ads/Ads'))

export function News() {
  const { news } = useNews();

  return (
    <div className="flex flex-col gap-16">
      <MainNews
        key={news[0]?.id}
        id={news[0]?.id}
        title={news[0]?.title}
        shortContent={news[0]?.shortContent}
        imageUrl={news[0]?.image}
      />

      {/* <div className="flex items-center gap-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Weather />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Ads />
        </Suspense>
      </div> */}

      {news.map((news) => (
        <NewsPreview
          key={news.id}
          id={news.id}
          title={news.title}
          shortContent={news.shortContent}
          imageUrl={news.image}
        />
      ))}
    </div>
  );
}
