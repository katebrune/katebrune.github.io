import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { TypographyAttributes, typographyOptions } from '../Typography'

export interface Heading2Props
  extends TypographyAttributes<HTMLHeadingElement> {}

export const Heading2: FunctionComponent<Heading2Props> = ({
  color = 'text-primary',
  ...props
}) => <h2 {...props} className={cx('text-2xl', typographyOptions({ color }))} />
