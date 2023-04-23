import { Meta } from '@storybook/react'

import { Heading3 as Heading3Component } from './Heading3'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Heading3',
  component: Heading3Component,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof Heading3Component>

export const Heading3 = {
  args: {
    color: 'text-primary',
    children: 'This is sample text',
  },
  parameters: {},
}
