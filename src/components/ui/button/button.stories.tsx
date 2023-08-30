import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (arguments_) => (
    <Button variant="default" {...arguments_}>
      Example
    </Button>
  ),
}

export const Destructive: Story = {
  render: (arguments_) => (
    <Button variant="destructive" {...arguments_}>
      Example
    </Button>
  ),
}

export const Outline: Story = {
  render: (arguments_) => (
    <Button variant="outline" {...arguments_}>
      Example
    </Button>
  ),
}

export const Secondary: Story = {
  render: (arguments_) => (
    <Button variant="secondary" {...arguments_}>
      Example
    </Button>
  ),
}

export const Ghost: Story = {
  render: (arguments_) => (
    <Button variant="ghost" {...arguments_}>
      Example
    </Button>
  ),
}

export const Link: Story = {
  render: (arguments_) => (
    <Button variant="link" {...arguments_}>
      Example
    </Button>
  ),
}
