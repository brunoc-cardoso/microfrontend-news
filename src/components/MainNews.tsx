import React from 'react'
import { Link } from 'react-router-dom'

type MainNewsProps = {
  id: number
  title: string
  shortContent: string
  imageUrl: string
}

export function MainNews({ id, title, shortContent, imageUrl }: MainNewsProps) {
  return (
    <div className="flex items-end">
      <Link to={`/news/${id}`}>
        <div className="w-full">
          <h1 className="font-bold text-primary-color text-3xl pb-8">
            {title}
          </h1>
          <div className="gap-10 flex items-center">
            <div className=" w-2/3 h-96 flex relative">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={imageUrl}
                alt="main news preview"
              />
            </div>
            <span className="flex w-1/3 h-auto text-xl">{shortContent}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
