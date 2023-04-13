import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { TypographyAttributes, typographyOptions } from '../Typography'

export interface Heading3Props
  extends TypographyAttributes<HTMLHeadingElement> {}

export const Heading3: FunctionComponent<Heading3Props> = ({
  color = 'text-primary',
  ...props
}) => <h3 {...props} className={cx('text-xl', typographyOptions({ color }))} />
