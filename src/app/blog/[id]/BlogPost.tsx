'use client'

import { MDXRemote } from 'next-mdx-remote'
import { HTMLAttributes, useEffect, useState } from 'react'
import { FruitSaladLoader } from '../../../components/feedback/FruitSaladLoader/FruitSaladLoader'
import { Typography } from '../../../components/data-display/Typography/Typography'
import { Pre } from '../../../components/data-display/Pre/Pre'
import { Image } from '../../../components/data-display/Image/Image'

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
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography.Heading1 {...props} color="app-primary" />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography.Heading2 {...props} color="text-primary" />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography.Heading3 {...props} color="text-primary" />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <Typography.Paragraph {...props} color="text-primary" />
    ),
    pre: (props: HTMLAttributes<HTMLPreElement>) => <Pre {...props} />,
    code: (props: HTMLAttributes<HTMLElement>) => (
      <Typography.Code {...props} color="text-secondary" />
    ),
    Image: (props: HTMLAttributes<HTMLImageElement>) => (
      <Image {...props} alt="blog post image" />
    ),
  }

  if (loadingAnimationVisible) return <FruitSaladLoader />

  return (
    <div className="animate-fadeIn1s">
      <MDXRemote {...content} components={mdxComponents} />
    </div>
  )
}
