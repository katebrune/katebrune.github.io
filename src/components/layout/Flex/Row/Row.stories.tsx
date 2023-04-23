import { Meta } from '@storybook/react'

import { Row as RowComponent } from './Row'
import { flexArgTypes } from '../Flex'

export default {
  title: 'Components/layout/Flex/Row',
  component: RowComponent,
  argTypes: {
    ...flexArgTypes,
  },
} as Meta<typeof RowComponent>

export const Row = {
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
