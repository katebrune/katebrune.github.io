'use server'

import React from 'react'
import moment from 'moment'
import Container from 'typedi'

import { MdxService } from '@/services/mdx-service'
import { PostPreview } from '@/app/(components)/post-preview/post-preview'

async function getPosts(): Promise<any[]> {
  const mdxService = Container.get(MdxService)
  const postsData = mdxService.getAllPostsMetadata()
  return postsData
    .map(({ metadata }) => {
      const [month, day, year] = metadata.date.replace(',', '').split(' ')
      return {
        ...metadata,
        mDate: moment([Number.parseInt(year), 0, Number.parseInt(day)]).month(
          month,
        ),
      }
    })
    .sort((a, b) => a.mDate - b.mDate)
    .reverse()
    .map(({ ...keep }) => ({ metadata: { ...keep } }))
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="mt-4 flex flex-col items-start gap-8">
      {posts.map(({ metadata }, index) => (
        <PostPreview
          id={metadata.id}
          title={metadata.title}
          description={metadata.description}
          date={metadata.date}
          tags={metadata.tags}
          key={index}
        />
      ))}
    </div>
  )
}
