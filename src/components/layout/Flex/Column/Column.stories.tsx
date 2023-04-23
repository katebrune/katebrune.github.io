import { Meta } from '@storybook/react'

import { Column as ColumnComponent } from './Column'
import { flexArgTypes } from '../Flex'

export default {
  title: 'Components/layout/Flex/Column',
  component: ColumnComponent,
  argTypes: {
    ...flexArgTypes,
  },
} as Meta<typeof ColumnComponent>

export const Column = {
  args: {
    gap: 'none',
    align: 'start',
    justify: 'start',
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
      </>
    ),
  },
}
