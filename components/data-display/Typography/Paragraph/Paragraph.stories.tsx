import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Paragraph as ParagraphComponent, ParagraphProps } from './Paragraph'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Paragraph',
  component: ParagraphComponent,
  argTypes: {
    ...typographyArgTypes,
  },
} as Meta<typeof ParagraphComponent>

export const Paragraph: Story<ParagraphProps> = (args) => (
  <ParagraphComponent {...args} />
)
Paragraph.args = {
  color: 'text-primary',
  children: 'This is sample text',
}
