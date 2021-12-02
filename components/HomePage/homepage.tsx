import React, { FunctionComponent } from 'react'
import { PostPreview } from '../PostPreview/post-preview'

interface HomePageProps {
  postPreviewData: any[]
}

export const HomePage: FunctionComponent<HomePageProps> = ({
  postPreviewData,
}) => {
  return (
    <div className="flex flex-col items-start mt-4 md:mt-8 lg:mt-20 mx-8 md:mx-16 lg:mx-64">
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
