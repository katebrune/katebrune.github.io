import moment from 'moment'
import type { GetStaticProps, NextPage } from 'next'
import Container from 'typedi'
import { PostPreview } from '../components/PostPreview/post-preview'
import { MdxService } from '../services/mdx-service'
import { HomePage } from '../components/HomePage/homepage'

interface HomeProps {
  postsData: any[]
}

const Home: NextPage<HomeProps> = ({ postsData }) => {
  return <HomePage postPreviewData={postsData} />
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
