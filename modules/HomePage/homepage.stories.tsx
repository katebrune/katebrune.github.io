import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { HomePage } from './HomePage'
import { NavBar } from '../NavBar'
// import styles from '../../../styles/Page.module.css'

export default {
  title: 'Pages/Home',
  component: HomePage,
  decorators: [
    (Story) => (
      <div className={styles.Body}>
        <div className={styles.Page}>
          <NavBar />
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  },
  argTypes: {},
} as ComponentMeta<typeof HomePage>

const mockPostsData = [
  {
    metadata: {
      id: 'test-1',
      title: 'The Quick Brown Fox',
      description: 'The quick brown fox jumps over the lazy dog.',
      date: 'Nov 17, 2017',
      tags: ['test'],
    },
  },
  {
    metadata: {
      id: 'test-2',
      title: 'The Quick Brown Fox 2',
      description: 'The quick brown fox jumps over the lazy dog.',
      date: 'Nov 17, 2017',
      tags: ['test'],
    },
  },
  {
    metadata: {
      id: 'test-3',
      title: 'The Quick Brown Fox 3',
      description: 'The quick brown fox jumps over the lazy dog.',
      date: 'Nov 17, 2017',
      tags: ['test'],
    },
  },
]

const Template: ComponentStory<typeof HomePage> = () => (
  <HomePage postPreviewData={mockPostsData} />
)

// export const Web = Template.bind({})
// Web.parameters = {
//   viewport: {
//     defaultViewport: 'responsive',
//   },
// }

// export const Tablet = Template.bind({})
// Tablet.parameters = {
//   viewport: {
//     defaultViewport: 'ipad',
//   },
// }

// export const Mobile = Template.bind({})
// Mobile.parameters = {
//   viewport: {
//     defaultViewport: 'iphone12',
//   },
// }
