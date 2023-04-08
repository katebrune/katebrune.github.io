'use client'

import { MDXRemote } from 'next-mdx-remote'
import { HTMLAttributes, useEffect, useState } from 'react'
import { FruitSaladLoader } from '../../../components/feedback/FruitSaladLoader/FruitSaladLoader'
import MdxComponents from '../../../components/data-display/MdxComponents/MdxComponents'

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
      <MdxComponents.Heading1 {...props} />
    ),
    h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <MdxComponents.Heading2 {...props} />
    ),
    h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
      <MdxComponents.Heading3 {...props} />
    ),
    p: (props: HTMLAttributes<HTMLParagraphElement>) => (
      <MdxComponents.Text {...props} />
    ),
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
      <MdxComponents.Pre {...props} />
    ),
    code: (props: HTMLAttributes<HTMLElement>) => (
      <MdxComponents.Code {...props} />
    ),
    Image: (props: HTMLAttributes<HTMLImageElement>) => (
      <MdxComponents.Image {...props} />
    ),
  }

  if (loadingAnimationVisible) return <FruitSaladLoader />

  return (
    <div className="animate-fadeIn1s">
      <MDXRemote {...content} components={mdxComponents} />
    </div>
  )
}
