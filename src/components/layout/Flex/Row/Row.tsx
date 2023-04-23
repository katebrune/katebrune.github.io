import React, { FunctionComponent } from 'react'
import cx from 'classnames'
import { FlexAttributes, flexOptions } from '../Flex'

export interface RowProps extends FlexAttributes {}

export const Row: FunctionComponent<RowProps> = ({
  gap = 'none',
  align = 'start',
  justify = 'start',
  ...props
}) => (
  <div
    {...props}
    className={cx('flex', 'flex-row', flexOptions({ gap, align, justify }))}
  />
)
