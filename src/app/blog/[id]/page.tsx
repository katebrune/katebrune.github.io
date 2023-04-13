'use server'

import { serialize } from 'next-mdx-remote/serialize'
import Container from 'typedi'
import { MdxService } from '../../../services/mdx-service'

import { BlogPost } from './BlogPost'

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
  return {
    metadata: post.metadata,
    content: serialized,
    id: id,
  }
}

export async function generateMetadata({ params }: any) {
  const post = await getBlogPost(params)

  return {
    title: `it's kate | ${post.metadata.title}`,
  }
}

export default async function BlogPostPage({ params }: any) {
  const post = await getBlogPost(params)

  return <BlogPost content={post.content} />
}
