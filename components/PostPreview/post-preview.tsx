import React, { FunctionComponent } from 'react'
import Link from 'next/link'
export interface PostPreviewProps {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
}

const Tag = ({ text, key }: { text: string; key: any }) => (
  <div
    className="bg-gray-200 text-sm text-gray-600 font-medium py-1 px-2.5 rounded-2xl text-center filter drop-shadow"
    key={key}
  >
    {text}
  </div>
)

export const PostPreview: FunctionComponent<PostPreviewProps> = ({
  id,
  title,
  description,
  date,
  tags,
}) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className="cursor-pointer mb-8">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold text-pink-500 overflow-ellipsis overflow-hidden whitespace-nowrap filter drop-shadow-sm">
            {title}
          </h3>
        </div>
        <div className="flex items-center h-4 my-1">
          <p className="italic text-gray-600 filter drop-shadow-sm">{date}</p>
        </div>
        <div className="flex">
          <p className="text-lg font-medium text-gray-600 line-clamp-2 filter drop-shadow-sm">
            {description}
          </p>
        </div>
        <div className="flex h-4 gap-2 items-center mt-3">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
