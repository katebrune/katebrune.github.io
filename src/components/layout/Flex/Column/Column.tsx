import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { FlexAttributes, flexOptions } from '../Flex'

export interface ColumnProps extends FlexAttributes {}

export const Column: FunctionComponent<ColumnProps> = ({
  gap = 'none',
  align = 'start',
  justify = 'start',
  ...props
}) => (
  <div
    {...props}
    className={cx('flex', 'flex-col', flexOptions({ gap, align, justify }))}
  />
)
