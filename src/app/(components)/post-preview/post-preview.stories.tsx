import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { PostPreview } from './post-preview'

const meta: Meta<typeof PostPreview> = {
  component: PostPreview,
  argTypes: {
    title: {
      description: 'the title of the blog post',
      control: 'text',
    },
    description: {
      description: 'the description of the blog post',
      control: 'text',
    },
    id: {
      description: 'the location of the blog post',
      control: 'text',
    },
    tags: {
      description: 'tags that are associated with this blog post',
      control: { type: 'object' },
    },
    date: {
      description: 'the date of the blog post',
      control: 'text',
    },
  },
}
export default meta

type Story = StoryObj<typeof PostPreview>

export const Default: Story = {
  args: {
    title: 'The Quick Brown Fox',
    description: 'The quick brown fox jumps over the lazy dog.',
    id: 'test-3',
    tags: ['a tag', 'another', 'something'],
    date: 'Aug 29, 2023',
  },
  render: (arguments_) => <PostPreview {...arguments_} />,
}
