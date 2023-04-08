import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Separator as SeparatorComponent, SeparatorProps } from './Separator'

export default {
  title: 'Components/Separator',
  component: SeparatorComponent,
  argTypes: {},
} as Meta<typeof SeparatorComponent>

export const Separator: Story<SeparatorProps> = (args) => (
  <SeparatorComponent {...args} />
)
Separator.args = {}
