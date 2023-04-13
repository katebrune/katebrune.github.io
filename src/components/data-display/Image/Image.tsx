import React, { FunctionComponent, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface ImageProps
  extends Omit<HTMLAttributes<HTMLImageElement>, 'alt'> {
  alt: string
}
export const Image: FunctionComponent<ImageProps> = (props) => (
  <img {...props} className={cx('')} />
)
