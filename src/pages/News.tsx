import React, { Suspense, useEffect } from "react";
import eventBus from "host/eventBus";
import { MainNews } from "../components/MainNews";
import { NewsPreview } from "../components/NewsPreview";
import { useNews } from "../useCase/useNews";
import { useWeather } from "../useCase/useWeather";

const Weather = React.lazy(() => import("weather/Weather"));
const Ads = React.lazy(() => import("ads/Ads"));

export function News() {
  const { news } = useNews();
  const { weather } = useWeather();

  useEffect(() => {
    if (weather) {
      eventBus.emit("weatherData", weather);
    }
  }, [weather]);

  return (
    <div className="flex flex-col gap-16">
      <MainNews
        key={news[0]?.id}
        id={news[0]?.id}
        title={news[0]?.title}
        shortContent={news[0]?.shortContent}
        imageUrl={news[0]?.image}
      />

      <div className="flex items-center gap-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Weather />
          <Ads />
        </Suspense>
      </div>

      {news.map((newsItem) => (
        <NewsPreview
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          shortContent={newsItem.shortContent}
          imageUrl={newsItem.image}
        />
      ))}
    </div>
  );
}
