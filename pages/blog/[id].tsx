import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import { Container } from 'typedi'
import { FruitSaladLoader } from '../../components/FruitSaladLoader/FruitSaladLoader'
import MdxComponents from '../../components/MdxComponents/MdxComponents'

import { MdxService } from '../../services/mdx-service'

const components = {
  h1: (props: any) => <MdxComponents.Heading1 {...props} />,
  h2: (props: any) => <MdxComponents.Heading2 {...props} />,
  h3: (props: any) => <MdxComponents.Heading3 {...props} />,
  p: (props: any) => <MdxComponents.Text {...props} />,
  pre: (props: any) => <MdxComponents.Pre {...props} />,
  code: (props: any) => <MdxComponents.Code {...props} />,
  Image: (props: any) => <MdxComponents.Image {...props} />,
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
    <div className="mx-8 sm:mx-8 md:mx-16 lg:mx-64 pb-10">
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
