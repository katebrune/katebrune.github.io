'use server'

import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import Container from 'typedi'

import { MdxService } from '@/services/mdx-service'
import { BlogPost } from '@/app/blog/[id]/(components)/blog-post/blog-post'

// generateStaticParams() is part of the nextjs api
// eslint-disable-next-line unicorn/no-abusive-eslint-disable
// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams() {
  const mdxService = Container.get(MdxService)
  const fileNames = mdxService.getAllPostNames()
  return fileNames.map((name) => ({ id: name }))
}

async function getBlogPost({ id }: { id: string }) {
  const mdxService = Container.get(MdxService)
  const post = mdxService.getPostData(id)
  const serialized = await serialize(post.content, {
    mdxOptions: {},
  })
  console.log('SERIALIZED', serialized)
  return {
    metadata: post.metadata,
    content: serialized,
    id: id,
  }
}

export async function generateMetadata({ params }: any) {
  const post = await getBlogPost(params)

  return {
    title: `kate's blog | ${post.metadata.title}`,
  }
}

export default async function BlogPostPage({ params }: any) {
  const post = await getBlogPost(params)

  return <BlogPost content={post.content} />
}
