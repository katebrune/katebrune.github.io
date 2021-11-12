import React, { FunctionComponent } from 'react'
import Link from 'next/link'
export interface PostPreviewProps {
  id: string
  title: string
  description: string
  date: string
}

export const PostPreview: FunctionComponent<PostPreviewProps> = ({
  id,
  title,
  description,
  date,
}) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className="cursor-pointer mb-4">
        <div className="flex h-10 items-center">
          <h3 className="text-2xl font-semibold text-red-400 overflow-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h3>
        </div>
        <div className="flex items-center h-4">
          <p className="italic text-gray-700">{date}</p>
        </div>
        <div className="flex h-14">
          <p className="text-lg font-medium text-gray-700 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
