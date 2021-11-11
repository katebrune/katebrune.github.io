import type { GetStaticProps, NextPage } from 'next'
import Container from 'typedi'
import { PostPreview } from '../components/PostPreview/post-preview'
import { MdxService } from '../services/mdx-service'

interface HomeProps {
  postsData: any[]
}

const Home: NextPage<HomeProps> = ({ postsData }) => {
  return (
    <div className="flex flex-col items-start mt-20 mx-64">
      <div className="flex items-center border-solid border-4 border-gray-700 w-full mb-4 p-2 justify-center">
        <h1 className="text-3xl font-semibold">POSTS</h1>
      </div>
      {postsData.map(({ metadata }, i) => (
        <PostPreview
          id={metadata.id}
          title={metadata.title}
          description={metadata.description}
          date={metadata.date}
          key={i}
        />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxService = Container.get(MdxService)
  const postsData = mdxService.getAllPostsMetadata()
  return {
    props: {
      postsData: postsData,
    },
  }
}

export default Home
