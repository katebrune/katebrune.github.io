import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/card'

import { Badge } from '@/components/ui/badge/badge'
import { buttonVariants } from '@/components/ui/button/button'

export interface PostPreviewProperties {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
}

export const PostPreview: FunctionComponent<PostPreviewProperties> = ({
  id,
  title,
  description,
  date,
  tags,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="tracking-[.01] dark:text-slate-100">
          {title}
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-1">
          {tags?.map((tag, index) => (
            <Badge variant="secondary" className="bg-slate-200" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={`/blog/${id}`}
          className={buttonVariants({
            variant: 'default',
            className: 'rounded-xl',
          })}
        >
          Open
        </Link>
      </CardFooter>
    </Card>
  )
}
