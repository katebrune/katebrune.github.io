import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Heading3 as Heading3Component, Heading3Props } from './Heading3'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Heading3',
  component: Heading3Component,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof Heading3Component>

export const Heading3: Story<Heading3Props> = (args) => (
  <Heading3Component {...args} />
)
Heading3.args = {
  color: 'text-primary',
  children: 'This is sample text',
}
