import { Meta } from '@storybook/react'

import { Image as ImageComponent } from './image'

export default {
  component: ImageComponent,
  argTypes: {},
} as Meta<typeof ImageComponent>

export const Image = {
  args: {
    src: 'https://static.independent.co.uk/2021/02/11/09/newFile-14.jpg',
    alt: 'Phoebe!',
  },
  parameters: {},
}
