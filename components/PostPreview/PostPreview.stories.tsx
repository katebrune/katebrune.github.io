import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PostPreview, PostPreviewProps } from './PostPreview'

export default {
  title: 'Components/PostPreview',
  component: PostPreview,
  argTypes: {
    title: {
      description: 'the title of the blog post',
      control: 'text',
    },
    description: {
      description: 'a description of the blog post',
      control: 'text',
    },
    id: {
      description: 'the location of the blog post',
      control: 'text',
    },
    tags: {
      description: 'tags that are associated with this blog post',
      options: ['a tag', 'another', 'something'],
      control: { type: 'check' },
    },
  },
} as ComponentMeta<typeof PostPreview>

const Template: ComponentStory<typeof PostPreview> = (
  props: PostPreviewProps,
) => <PostPreview {...props} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'The Quick Brown Fox',
  description: 'The quick brown fox jumps over the lazy dog.',
  id: 'test-3',
  tags: [],
}
