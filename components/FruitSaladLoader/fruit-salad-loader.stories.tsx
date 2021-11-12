import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FruitSaladLoader } from './fruit-salad-loader'

export default {
  title: 'Components/FruitSaladLoader',
  component: FruitSaladLoader,
  argTypes: {},
} as ComponentMeta<typeof FruitSaladLoader>

const Template: ComponentStory<typeof FruitSaladLoader> = () => (
  <FruitSaladLoader />
)

export const Primary = Template.bind({})
Primary.args = {}
