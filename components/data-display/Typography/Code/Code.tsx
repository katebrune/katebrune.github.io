import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { TypographyAttributes, typographyOptions } from '../Typography'

export interface CodeProps extends TypographyAttributes<HTMLElement> {
  background?: 'slate' | 'transparent'
}

export const Code: FunctionComponent<CodeProps> = ({
  color = 'text-secondary',
  background = 'slate',
  ...props
}) => (
  <code
    {...props}
    className={cx('bg-pre', typographyOptions({ color }), {
      'bg-backgroundSlate': background === 'slate',
      'bg-transparent': background === 'transparent',
    })}
  />
)
