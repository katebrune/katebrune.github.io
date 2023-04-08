import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Row as RowComponent, RowProps } from './Row'
import { flexArgTypes } from '../Flex'

export default {
  title: 'Components/layout/Flex/Row',
  component: RowComponent,
  argTypes: {
    ...flexArgTypes,
  },
} as Meta<typeof RowComponent>

export const Row: Story<RowProps> = (args) => <RowComponent {...args} />
Row.args = {
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
