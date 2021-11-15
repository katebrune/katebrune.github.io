import moment from 'moment'
import type { GetStaticProps, NextPage } from 'next'
import Container from 'typedi'
import { PostPreview } from '../components/PostPreview/post-preview'
import { MdxService } from '../services/mdx-service'

interface HomeProps {
  postsData: any[]
}

const Home: NextPage<HomeProps> = ({ postsData }) => {
  return (
    <div className="flex flex-col items-start mt-4 md:mt-8 lg:mt-20 mx-8 md:mx-16 lg:mx-64">
      {/* <div className="flex items-center border-solid border-4 border-gray-700 w-full mb-4 p-2 justify-center">
        <h1 className="text-3xl font-semibold">POSTS</h1>
      </div> */}
      {postsData.map(({ metadata }, i) => (
        <PostPreview
          id={metadata.id}
          title={metadata.title}
          description={metadata.description}
          date={metadata.date}
          tags={metadata.tags}
          key={i}
        />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxService = Container.get(MdxService)
  const postsData = mdxService.getAllPostsMetadata()
  const orderedPosts = postsData
    .map(({ metadata }) => {
      const [month, day, year] = metadata.date.replace(',', '').split(' ')
      return {
        ...metadata,
        mDate: moment([parseInt(year), 0, parseInt(day)]).month(month),
      }
    })
    .sort((a, b) => a.mDate - b.mDate)
    .reverse()
    .map(({ mDate, ...keep }) => ({ metadata: { ...keep } }))
  return {
    props: {
      postsData: orderedPosts,
    },
  }
}

export default Home
