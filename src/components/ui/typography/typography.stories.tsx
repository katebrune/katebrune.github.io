import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  component: Typography,
}
export default meta

type Story = StoryObj<typeof Typography>

export const P: Story = {
  render: () => <Typography variant="p">Example</Typography>,
}

export const H1: Story = {
  render: () => <Typography variant="h1">Example</Typography>,
}

export const H2: Story = {
  render: () => <Typography variant="h2">Example</Typography>,
}

export const H3: Story = {
  render: () => <Typography variant="h3">Example</Typography>,
}

export const Code: Story = {
  render: () => <Typography variant="code">Example</Typography>,
}
