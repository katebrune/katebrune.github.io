import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FruitSaladLoader } from './FruitSaladLoader'

export default {
  title: 'Components/feedback/FruitSaladLoader',
  component: FruitSaladLoader,
  argTypes: {},
} as ComponentMeta<typeof FruitSaladLoader>

const Template: ComponentStory<typeof FruitSaladLoader> = () => (
  <FruitSaladLoader />
)

export const Primary = Template.bind({})
Primary.args = {}