import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NavBar } from './NavBar'

export default {
  title: 'Modules/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = () => <NavBar />

export const Primary = Template.bind({})
Primary.args = {}
