import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Example } from './example'

export default {
  title: 'Components/Example',
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = () => <Example />

export const Primary = Template.bind({})
Primary.args = {}
