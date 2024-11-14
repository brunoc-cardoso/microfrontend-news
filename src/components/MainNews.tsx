import React, { Suspense } from "react";
import { Link } from "react-router-dom";
// const Sponsors = React.lazy(() => import('sponsors/Sponsors'))

type MainNewsProps = {
  id: number;
  title: string;
  shortContent: string;
  imageUrl: string;
};

export function MainNews({ id, title, shortContent, imageUrl }: MainNewsProps) {
  return (
    <div className="flex items-end">
      <Link to={`/news/${id}`}>
        <div className="max-w-7xl">
          <h1 className="font-bold text-primary-color text-3xl pb-8">
            {title}
          </h1>
          <div className="gap-10 flex items-center">
            <div className="rounded-3xl bg-slate-600 w-2/3 h-96 flex">
              <img src={imageUrl} alt="main news preview" />
            </div>
            <span className="flex w-1/3 h-64 text-xl">{shortContent}</span>
          </div>
        </div>
      </Link>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Sponsors />
      </Suspense> */}
    </div>
  );
}
