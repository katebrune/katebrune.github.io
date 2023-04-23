import type { HTMLAttributes } from 'react'
import cx from 'classnames'

type TypographyOptions = {
  color?: 'text-primary' | 'text-secondary' | 'app-primary' | 'app-secondary'
}

export type TypographyAttributes<T> = Omit<
  HTMLAttributes<T>,
  'className' | 'color '
> &
  TypographyOptions

export const typographyOptions = (options: TypographyOptions): string =>
  cx('subpixel-antialiased', 'tracking-wide', {
    'text-primary': options.color === 'app-primary',
    'text-secondary': options.color === 'app-secondary',
    'text-textPrimary': options.color === 'text-primary',
    'text-textSecondary': options.color === 'text-secondary',
  })

export const typographyArgTypes = {
  color: {
    options: ['text-primary', 'text-secondary', 'app-primary', 'app-secondary'],
    control: 'select',
  },
}

import { Paragraph } from './Paragraph/Paragraph'
import { Code } from './Code/Code'
import { Heading1 } from './Heading1/Heading1'
import { Heading2 } from './Heading2/Heading2'
import { Heading3 } from './Heading3/Heading3'

export const Typography = {
  Paragraph,
  Code,
  Heading1,
  Heading2,
  Heading3,
}

export type { ParagraphProps } from './Paragraph/Paragraph'
export type { CodeProps } from './Code/Code'
export type { Heading1Props } from './Heading1/Heading1'
export type { Heading2Props } from './Heading2/Heading2'
export type { Heading3Props } from './Heading3/Heading3'
