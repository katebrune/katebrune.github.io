import { ComponentMeta, ComponentStory } from '@storybook/react'

import MdxComponentsModule from './MdxComponents'

export default {
  title: 'Components/MdxComponents',
}

export const MdxComponents = () => (
  <>
    <MdxComponentsModule.Heading1>Heading1</MdxComponentsModule.Heading1>
    <MdxComponentsModule.Heading2>Heading2</MdxComponentsModule.Heading2>
    <MdxComponentsModule.Heading3>Heading3</MdxComponentsModule.Heading3>
    <MdxComponentsModule.Text>Text</MdxComponentsModule.Text>
    <MdxComponentsModule.Pre>Pre</MdxComponentsModule.Pre>
    <MdxComponentsModule.Code>Code</MdxComponentsModule.Code>
  </>
)
