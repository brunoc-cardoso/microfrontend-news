import React from "react";
import { Link } from "react-router-dom";

type NewsPreviewProps = {
  id: number;
  title: string;
  shortContent: string;
  imageUrl: string;
};

export function NewsPreview({
  id,
  title,
  shortContent,
  imageUrl,
}: NewsPreviewProps) {
  return (
    <div className="flex items-center gap-6 max-w-7xl flex-row">
      <Link to={`/news/${id}`}>
        <div className="rounded-3xl bg-slate-600 min-w-96 w-1/2 h-64">
          <img src={imageUrl} alt="" />
        </div>
        <div className="gap-6 items-center">
          <h1 className="font-bold text-primary-color text-2xl py-4">
            {title}
          </h1>

          <span className="w-1/2 h-64 text-xl">{shortContent}</span>
        </div>
      </Link>
    </div>
  );
}
