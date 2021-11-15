import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { Container } from 'typedi'
import { FruitSaladLoader } from '../../components/FruitSaladLoader/fruit-salad-loader'
import {
  MdxImageProps,
  MdxImage,
  MdxTitle,
  MdxText,
  MdxPre,
} from '../../components/MdxComponents'

import { MdxService } from '../../services/mdx-service'

const components = {
  h1: (props: any) => <MdxTitle {...props} />,
  h2: (props: any) => (
    <h2 className="text-3xl text-gray-800 font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl text-gray-800 font-semibold" {...props} />
  ),
  p: (props: any) => <MdxText {...props} />,
  pre: (props: any) => <MdxPre {...props} />,
  Image: (props: MdxImageProps) => <MdxImage {...props} />,
}

interface BlogProps {
  postMetadata: any
  postContent: any
}

const Blog: NextPage<BlogProps> = ({ postMetadata, postContent }) => {
  const [renderLoading, setRenderLoading] = useState(true)

  /*
   * want to render loading before the page is rendered (because the loader is cute)
   * because we are serving static files, we have to manually set a timeout
   */
  useEffect(() => {
    setTimeout(() => {
      setRenderLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="mx-52 pb-10">
      <Head>
        <title>{`it's kate | ${postMetadata.title}`}</title>
      </Head>
      {renderLoading ? (
        <FruitSaladLoader />
      ) : (
        <div className="animate-fadeIn1s">
          <MDXRemote {...postContent} components={components} />
        </div>
      )}
    </div>
  )
}

/**
 * maps blog posts 1-1 with paths, so that a blog page
 * is rendered for each post
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const mdxService = Container.get(MdxService)
  const fileNames = mdxService.getAllPostNames()
  return {
    paths: fileNames.map((name) => ({ params: { id: name } })),
    fallback: false,
  }
}

/**
 * gets props for an individual blog page
 */
export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const mdxService = Container.get(MdxService)
  const postData = mdxService.getPostData(params!.id as string)
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [require('remark-prism')],
    },
  })
  return {
    props: {
      postMetadata: postData.metadata,
      postContent: mdxSource,
      id: params!.id,
    },
  }
}

export default Blog
