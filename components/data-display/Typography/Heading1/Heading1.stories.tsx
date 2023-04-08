import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Heading1 as Heading1Component, Heading1Props } from './Heading1'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Heading1',
  component: Heading1Component,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof Heading1Component>

export const Heading1: Story<Heading1Props> = (args) => (
  <Heading1Component {...args} />
)
Heading1.args = {
  color: 'text-primary',
  children: 'This is sample text',
}
