'use server'

import moment from 'moment'
import Container from 'typedi'
import { PageUnderConstruction } from '../modules/PageUnderConstruction/PageUnderConstruction'
import { MdxService } from '../services/mdx-service'
import { Home } from './Home'

async function getPosts(): Promise<any[]> {
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

  return orderedPosts
}

export default async function HomePage() {
  const posts = await getPosts()
  const pageUnderConstruction = false

  if (pageUnderConstruction) return <PageUnderConstruction />
  return <Home postPreviews={posts} />
}
