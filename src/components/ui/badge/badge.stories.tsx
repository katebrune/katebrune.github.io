import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => <Badge variant="default">Example</Badge>,
}

export const Secondary: Story = {
  render: () => <Badge variant="secondary">Example</Badge>,
}

export const Destructive: Story = {
  render: () => <Badge variant="destructive">Example</Badge>,
}

export const Outline: Story = {
  render: () => <Badge variant="outline">Example</Badge>,
}
