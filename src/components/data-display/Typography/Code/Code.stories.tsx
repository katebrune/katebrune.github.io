import { Meta } from '@storybook/react'

import { Code as CodeComponent } from './Code'
import { typographyArgTypes } from '../Typography'

export default {
  title: 'Components/data-display/Typography/Code',
  component: CodeComponent,
  argTypes: {
    ...typographyArgTypes,
    background: {
      options: ['slate', 'transparent'],
      control: 'select',
    },
  },
} as Meta<typeof CodeComponent>

export const Code = {
  args: {
    color: 'text-secondary',
    background: 'slate',
    children:
      'const sayHello = (name: string) => console.log(`Hello, ${name}!`)',
  },
  parameters: {},
}
