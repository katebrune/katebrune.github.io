'use client'

import React, { FunctionComponent } from 'react'
import { PostPreview } from '../modules/HomePage/PostPreview/PostPreview'
import styles from '../modules/HomePage/HomePage.module.css'

interface HomeProps {
  postPreviews: any[]
}

export const Home: FunctionComponent<HomeProps> = ({ postPreviews }) => {
  return (
    <div className={styles.Container}>
      {postPreviews.map(({ metadata }, i) => (
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
