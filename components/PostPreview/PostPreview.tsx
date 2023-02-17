import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styles from './PostPreview.module.css'

export interface PostPreviewProps {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
}

const Tag = ({ text, key }: { text: string; key: any }) => (
  <div className={styles.Tag} key={key}>
    {text}
  </div>
)

export const PostPreview: FunctionComponent<PostPreviewProps> = ({
  id,
  title,
  description,
  date,
  tags,
}) => {
  return (
    <Link href={`/blog/${id}`} passHref>
      <div className={styles.LinkContainer}>
        <div className={styles.TitleContainer}>
          <h3 className={styles.Title}>{title}</h3>
        </div>
        <div className={styles.DateContainer}>
          <p className={styles.Date}>{date}</p>
        </div>
        <div className={styles.DescriptionContaienr}>
          <p className={styles.Description}>{description}</p>
        </div>
        <div className={styles.TagGroup}>
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
