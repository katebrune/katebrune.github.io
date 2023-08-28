import { render } from '@testing-library/react'
import React from 'react'
import { PostPreview, PostPreviewProperties } from './post-preview'

describe('<PostPreview />', () => {
  let mockProperties: PostPreviewProperties
  beforeEach(() => {
    mockProperties = {
      id: 'mock',
      title: 'Mock Title',
      description: 'Some super interesting description',
      date: 'November 11, 2021',
      tags: ['mock', 'test'],
    }
  })
  describe('title', () => {
    it('should render the given title', () => {
      const { getByText } = render(<PostPreview {...mockProperties} />)
      expect(getByText(mockProperties.title)).toBeInTheDocument()
    })
  })
  describe('description', () => {
    it('should render the given description', () => {
      const { getByText } = render(<PostPreview {...mockProperties} />)
      expect(getByText(mockProperties.description)).toBeInTheDocument()
    })
  })
  describe('date', () => {
    it('should render the date', () => {
      const { getByText } = render(<PostPreview {...mockProperties} />)
      expect(getByText(mockProperties.date)).toBeInTheDocument()
    })
  })
  describe('tags', () => {
    it('should render each tag', () => {
      const { getByText } = render(<PostPreview {...mockProperties} />)
      for (let tag of mockProperties.tags) {
        expect(getByText(tag)).toBeInTheDocument()
      }
    })
  })
})
