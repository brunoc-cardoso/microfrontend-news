import React from 'react'
import { Link } from 'react-router-dom'

type NewsPreviewProps = {
  id: number
  title: string
  shortContent: string
  imageUrl: string
}

export function NewsPreview({
  id,
  title,
  shortContent,
  imageUrl
}: NewsPreviewProps) {
  return (
    <div className="max-w-7xl">
      <Link
        className="flex items-center gap-6 max-lg:flex-col max-lg:items-center max-lg:w-full"
        to={`/news/${id}`}
      >
        <div className="min-w-96 w-2/5 h-64">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="w-3/5">
          <h1 className="font-bold text-primary-color text-2xl py-4 max-lg:text-justify">
            {title}
          </h1>

          <span className="text-xl max-lg:text-justify">{shortContent}</span>
        </div>
      </Link>
    </div>
  )
}
