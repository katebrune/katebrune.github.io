import { Meta } from '@storybook/react'

import { Code as CodeComponent } from './code'

export default {
  component: CodeComponent,
  argTypes: {},
} as Meta<typeof CodeComponent>

export const Code = {
  args: {
    children: `
function sayHelloWorld(){
	console.log('Hello, World!')
}
	`,
  },
  parameters: {},
}
