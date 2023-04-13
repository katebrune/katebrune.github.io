import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { TypographyAttributes, typographyOptions } from '../Typography'

export interface Heading1Props
  extends TypographyAttributes<HTMLHeadingElement> {}

export const Heading1: FunctionComponent<Heading1Props> = ({
  color = 'text-primary',
  ...props
}) => <h1 {...props} className={cx('text-3xl', typographyOptions({ color }))} />
