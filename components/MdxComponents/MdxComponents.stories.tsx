import { ComponentMeta, ComponentStory } from '@storybook/react'

import MdxComponentsModule from './MdxComponents'

export default {
  title: 'Components/MdxComponents',
}

export const Heading1 = () => (
  <MdxComponentsModule.Heading1>Heading1</MdxComponentsModule.Heading1>
)

export const Heading2 = () => (
  <MdxComponentsModule.Heading2>Heading2</MdxComponentsModule.Heading2>
)

export const Heading3 = () => (
  <MdxComponentsModule.Heading3>Heading3</MdxComponentsModule.Heading3>
)

export const Text = () => (
  <MdxComponentsModule.Text>Text</MdxComponentsModule.Text>
)

export const PreAndCode = () => (
  <MdxComponentsModule.Pre>
    <MdxComponentsModule.Code>
      {`const sayHello = () => console.log('Hello, World!');`}
    </MdxComponentsModule.Code>
  </MdxComponentsModule.Pre>
)
