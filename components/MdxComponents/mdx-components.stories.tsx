import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MdxText, MdxTitle } from '.'

const MdxComponentsWrapper = () => {
  return (
    <div>
      <MdxTitle>Mdx Title</MdxTitle>
      <MdxText>
        This is MdxText. The quick brown fox jumps over the lazy dog.
      </MdxText>
    </div>
  )
}

export default {
  title: 'Components/MdxComponents',
  component: MdxComponentsWrapper,
} as ComponentMeta<typeof MdxComponentsWrapper>

const Template: ComponentStory<typeof MdxComponentsWrapper> = () => (
  <MdxComponentsWrapper />
)

export const Primary = Template.bind({})
Primary.args = {}
