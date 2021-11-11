import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { SerializeOptions } from 'next-mdx-remote/dist/types'
import { serialize } from 'next-mdx-remote/serialize'
import { Container } from 'typedi'

import { MdxService } from '../../services/mdx-service'

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-semibold my-10" {...props} />
  ),
  p: (props: any) => <p className="text-lg" {...props} />,
  pre: (props: any) => (
    <pre
      style={{
        borderRadius: '8px',
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
      }}
      {...props}
    />
  ),
}

interface BlogProps {
  postMetadata: any
  postContent: any
}

const Blog: NextPage<BlogProps> = ({ postMetadata, postContent }) => {
  return (
    <div className="mx-52">
      <MDXRemote {...postContent} components={components} />
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
      remarkPlugins: [require('remark-code-titles'), require('remark-prism')],
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
