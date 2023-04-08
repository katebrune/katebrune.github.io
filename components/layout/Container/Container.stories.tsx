import { Meta, Story } from '@storybook/react'
import React from 'react'

import {
  Container as ContainerComponent,
  ContainerProps,
  containerArgTypes,
} from './Container'

export default {
  title: 'Components/layout/Container',
  component: ContainerComponent,
  argTypes: {
    ...containerArgTypes,
  },
} as Meta<typeof ContainerComponent>

export const Container: Story<ContainerProps> = (args) => (
  <ContainerComponent {...args} />
)
Container.args = {
  width: 'auto',
  height: 'auto',
  background: 'slate',
  color: 'text-secondary',
  padding: 'none',
  children: 'Hello, World!',
}
