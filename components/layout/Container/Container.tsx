import React, { FunctionComponent, HTMLAttributes } from 'react'
import cx from 'classnames'

interface ContainerOptions {
  width?:
    | 'fit'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | '50'
    | '100'
    | 'screen'
    | 'auto'
  height?:
    | 'fit'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | '50'
    | '100'
    | 'screen'
    | 'auto'
  background?: 'light' | 'slate'
  color?: 'text-primary' | 'text-secondary' | 'app-primary' | 'app-secondary'
  padding?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl'
}

type ContainerAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'className'> &
  ContainerOptions

const containerOptions = (options: ContainerOptions): string =>
  cx({
    'w-fit': options.width === 'fit',
    'w-8': options.width === 'xs',
    'w-16': options.width === 's',
    'w-32': options.width === 'm',
    'w-52': options.width === 'l',
    'w-96': options.width === 'xl',
    'w-1/2': options.width === '50',
    'w-full': options.width === '100',
    'w-screen': options.width === 'screen',
    'w-auto': options.width === 'auto',
    'h-fit': options.height === 'fit',
    'h-8': options.height === 'xs',
    'h-16': options.height === 's',
    'h-32': options.height === 'm',
    'h-52': options.height === 'l',
    'h-96': options.height === 'xl',
    'h-1/2': options.height === '50',
    'h-full': options.height === '100',
    'h-screen': options.height === 'screen',
    'h-auto': options.height === 'auto',
    'bg-background': options.background === 'light',
    'bg-backgroundSlate': options.background === 'slate',
    'text-textPrimary': options.color === 'text-primary',
    'text-textSecondary': options.color === 'text-secondary',
    'text-primary': options.color === 'app-primary',
    'text-secondary': options.color === 'app-secondary',
    'p-0': options.padding === 'none',
    'p-2': options.padding === 'xs',
    'p-4': options.padding === 's',
    'p-8': options.padding == 'm',
    'p-16': options.padding === 'l',
    'p-32': options.padding === 'xl',
  })

export const containerArgTypes = {
  width: {
    options: ['fit', 'xs', 's', 'm', 'l', 'xl', '50', '100', 'screen', 'auto'],
    control: 'select',
  },
  height: {
    options: ['fit', 'xs', 's', 'm', 'l', 'xl', '50', '100', 'screen', 'auto'],
    control: 'select',
  },
  background: {
    options: ['light', 'slate'],
    control: 'select',
  },
  color: {
    options: ['text-primary', 'text-secondary', 'app-primary', 'app-secondary'],
    control: 'select',
  },
  padding: {
    options: ['xs', 's', 'm', 'l', 'xl'],
    control: 'select',
  },
}

export interface ContainerProps extends ContainerAttributes {}

export const Container: FunctionComponent<ContainerProps> = ({
  width = 'auto',
  height = 'auto',
  background = 'light',
  color = 'text-primary',
  padding = 'xs',
  ...props
}) => (
  <div
    {...props}
    className={cx(
      containerOptions({ width, height, background, color, padding }),
    )}
  />
)
