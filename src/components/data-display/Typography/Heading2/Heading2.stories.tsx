import { Meta } from '@storybook/react'

import { Heading2 as Heading2Component } from './Heading2'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Heading2',
  component: Heading2Component,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof Heading2Component>

export const Heading2 = {
  args: {
    color: 'text-primary',
    children: 'This is sample text',
  },
  parameters: {},
}
