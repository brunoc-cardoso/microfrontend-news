import React, { Suspense, useEffect } from 'react'
import eventBus from 'host/eventBus'
import { MainNews } from '../components/MainNews'
import { NewsPreview } from '../components/NewsPreview'
import { useNews } from '../useCase/useNews'
import { useWeather } from '../useCase/useWeather'

const Weather = React.lazy(() => import('weather/Weather'))
const Sponsors = React.lazy(() => import('sponsors/Sponsors'))
const Ads = React.lazy(() => import('ads/Ads'))

export function News() {
  const { news } = useNews()
  const { weather } = useWeather()

  useEffect(() => {
    if (weather) {
      eventBus.emit('weatherData', weather)
    }
  }, [weather])

  return (
    <div className="flex flex-col gap-16 justify-center max-w-7xl p-10">
      <div className="flex gap-10 items-end max-lg:flex-col max-lg:items-center">
        <MainNews
          key={news[0]?.id}
          id={news[0]?.id}
          title={news[0]?.title}
          shortContent={news[0]?.shortContent}
          imageUrl={news[0]?.image}
        />
        <Sponsors />
      </div>

      <div className="flex items-center gap-10 max-lg:flex-col max-lg:items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Weather />
          <Ads />
        </Suspense>
      </div>

      {news.map(newsItem => (
        <NewsPreview
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          shortContent={newsItem.shortContent}
          imageUrl={newsItem.image}
        />
      ))}
    </div>
  )
}
