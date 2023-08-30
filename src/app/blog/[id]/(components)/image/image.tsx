import React, { FunctionComponent, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface ImageProperties
  extends Omit<HTMLAttributes<HTMLImageElement>, 'alt'> {
  alt: string
}
export const Image: FunctionComponent<ImageProperties> = (properties) => (
  // Using next/image automatically optimizes images and costs $ when deployed on vercel
  // eslint-disable-next-line @next/next/no-img-element
  <img {...properties} className={cx('')} alt={properties.alt} />
)
