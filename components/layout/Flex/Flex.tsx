import type { HTMLAttributes } from 'react'
import cx from 'classnames'

type FlexOptions = {
  gap?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?:
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
}

export type FlexAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'className'> &
  FlexOptions

export const flexOptions = (options: FlexOptions): string =>
  cx({
    'gap-0': options.gap === 'none',
    'gap-2': options.gap === 'xs',
    'gap-4': options.gap === 's',
    'gap-8': options.gap === 'm',
    'gap-16': options.gap === 'l',
    'gap-32': options.gap === 'xl',
    'items-start': options.align === 'start',
    'items-end': options.align === 'end',
    'items-center': options.align === 'center',
    'items-baseline': options.align === 'baseline',
    'items-stretch': options.align === 'stretch',
    'justify-normal': options.justify === 'normal',
    'justify-start': options.justify === 'start',
    'justify-end': options.justify === 'end',
    'justify-center': options.justify === 'center',
    'justify-between': options.justify === 'between',
    'justify-around': options.justify === 'around',
    'justify-evenly': options.justify === 'evenly',
    'justify-stretch': options.justify === 'stretch',
  })

export const flexArgTypes = {
  gap: {
    options: ['xs', 's', 'm', 'l', 'xl'],
    control: 'select',
  },
  align: {
    options: ['start', 'end', 'center', 'baseline', 'stretch'],
    control: 'select',
  },
  justify: {
    options: [
      'normal',
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
      'stretch',
    ],
    control: 'select',
  },
}

import { Column } from './Column/Column'
import { Row } from './Row/Row'

export const Flex = {
  Column,
  Row,
}

export type { ColumnProps } from './Column/Column'
export type { RowProps } from './Row/Row'
