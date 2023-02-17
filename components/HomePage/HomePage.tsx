import React, { FunctionComponent } from 'react'
import { PostPreview } from '../PostPreview/PostPreview'
import styles from './HomePage.module.css'

interface HomePageProps {
  postPreviewData: any[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({
  postPreviewData,
}) => {
  return (
    <div className={styles.Container}>
      {postPreviewData.map(({ metadata }, i) => (
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
