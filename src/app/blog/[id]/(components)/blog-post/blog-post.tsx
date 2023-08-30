'use client'

import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { HTMLAttributes, useEffect, useState } from 'react'

import { FruitSaladLoader } from '@/app/blog/[id]/(components)/fruit-salad-loader/fruit-salad-loader'
import { Image } from '@/app/blog/[id]/(components)/image/image'
import { Code } from '@/app/blog/[id]/(components)/code/code'
import { Typography } from '@/components/ui/typography/typography'

export function BlogPost({ content }: { content: any }) {
  const [loadingAnimationVisible, setLoadingAnimationVisible] = useState(true)

  /**
   * want to render the loading animation before the content
   * is rendered (because its cute). since we are serving static
   * files, have to manually set a timeout
   */
  useEffect(() => {
    setTimeout(() => {
      setLoadingAnimationVisible(false)
    }, 1000)
  }, [])

  const mdxComponents = {
    h1: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h1" {...properties} />
    ),
    h2: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h2" {...properties} />
    ),
    h3: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="h3" {...properties} />
    ),
    p: (properties: HTMLAttributes<HTMLParagraphElement>) => (
      <Typography variant="p" {...properties} className="tracking-wide" />
    ),
    code: (properties: HTMLAttributes<HTMLElement>) => <Code {...properties} />,
    Image: (properties: HTMLAttributes<HTMLImageElement>) => (
      <Image {...properties} alt="blog post image" />
    ),
  }

  if (loadingAnimationVisible) return <FruitSaladLoader />

  return (
    <div>
      <MDXRemote {...content} components={mdxComponents} />
    </div>
  )
}
