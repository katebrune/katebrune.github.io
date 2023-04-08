import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Column as ColumnComponent, ColumnProps } from './Column'
import { flexArgTypes } from '../Flex'

export default {
  title: 'Components/layout/Flex/Column',
  component: ColumnComponent,
  argTypes: {
    ...flexArgTypes,
  },
} as Meta<typeof ColumnComponent>

export const Column: Story<ColumnProps> = (args) => (
  <ColumnComponent {...args} />
)
Column.args = {
  gap: 'none',
  align: 'start',
  justify: 'start',
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
    </>
  ),
}
