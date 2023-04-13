import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { TypographyAttributes, typographyOptions } from '../Typography'

export interface ParagraphProps
  extends TypographyAttributes<HTMLParagraphElement> {}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  color = 'text-primary',
  ...props
}) => <p {...props} className={cx('text-base', typographyOptions({ color }))} />
