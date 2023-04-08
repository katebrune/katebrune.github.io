import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageUnderConstruction as PageUnderConstructionComponent } from './PageUnderConstruction'

export default {
  title: 'Components/PageUnderConstruction',
  component: PageUnderConstructionComponent,
  argTypes: {},
} as ComponentMeta<typeof PageUnderConstructionComponent>

export const PageUnderConstruction: ComponentStory<
  typeof PageUnderConstructionComponent
> = (args) => <PageUnderConstructionComponent {...args} />
