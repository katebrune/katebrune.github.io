import React from 'react'
import { Meta, Story } from '@storybook/react'

import { PageUnderConstruction as PageUnderConstructionComponent } from './PageUnderConstruction'

export default {
  title: 'Modules/PageUnderConstruction',
  component: PageUnderConstructionComponent,
  argTypes: {},
} as Meta<typeof PageUnderConstructionComponent>

export const PageUnderConstruction = {
  args: {},
  parameters: {},
}
