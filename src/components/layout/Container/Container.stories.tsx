import { Meta } from '@storybook/react'

import { Container as ContainerComponent, containerArgTypes } from './Container'

export default {
  title: 'Components/layout/Container',
  component: ContainerComponent,
  argTypes: {
    ...containerArgTypes,
  },
} as Meta<typeof ContainerComponent>

export const Container = {
  args: {
    width: 'auto',
    height: 'auto',
    background: 'slate',
    color: 'text-secondary',
    padding: 'none',
    children: 'Hello, World!',
  },
  parameters: {},
}
