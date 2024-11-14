import React, { Suspense } from 'react'
import { MainNews } from '../components/MainNews'
import { NewsPreview } from '../components/NewsPreview'
const Weather = React.lazy(() => import('weather/Weather'))
const Ads = React.lazy(() => import('ads/Ads'))

export function News() {
  return (
    <div className="flex flex-col gap-16">
      <Suspense fallback={<div>Loading...</div>}>
        <MainNews />
      </Suspense>

      <div className="flex items-center gap-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Weather />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Ads />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsPreview />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsPreview />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsPreview />
      </Suspense>
    </div>
  )
}
