import { Meta, Story } from '@storybook/react'
import React from 'react'

import {
  RootLayout as RootLayoutComponent,
  RootLayoutProps,
} from './RootLayout'

export default {
  title: 'Modules/RootLayout',
  component: RootLayoutComponent,
  argTypes: {},
} as Meta<typeof RootLayoutComponent>

export const RootLayout: Story<RootLayoutProps> = (args) => (
  <RootLayoutComponent {...args} />
)
RootLayout.args = {
  children: 'Hello, World!',
}
