import { Meta } from '@storybook/react'

import { Paragraph as ParagraphComponent } from './Paragraph'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Paragraph',
  component: ParagraphComponent,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof ParagraphComponent>

export const Paragraph = {
  args: {
    color: 'text-primary',
    children: 'This is sample text',
  },
  parameters: {},
}
