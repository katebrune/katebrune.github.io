import { render } from '@testing-library/react'
import { PostPreview, PostPreviewProps } from './post-preview'

describe('<PostPreview />', () => {
  let mockProps: PostPreviewProps
  beforeEach(() => {
    mockProps = {
      id: 'mock',
      title: 'Mock Title',
      description: 'Some super interesting description',
      date: 'November 11, 2021',
      tags: ['mock', 'test'],
    }
  })
  describe('title', () => {
    it('should render the given title', () => {
      const { getByText } = render(<PostPreview {...mockProps} />)
      expect(getByText(mockProps.title)).toBeInTheDocument()
    })
  })
  describe('description', () => {
    it('should render the given description', () => {
      const { getByText } = render(<PostPreview {...mockProps} />)
      expect(getByText(mockProps.description)).toBeInTheDocument()
    })
  })
  describe('date', () => {
    it('should render the date', () => {
      const { getByText } = render(<PostPreview {...mockProps} />)
      expect(getByText(mockProps.date)).toBeInTheDocument()
    })
  })
  describe('tags', () => {
    it('should render each tag', () => {
      const { getByText } = render(<PostPreview {...mockProps} />)
      mockProps.tags.forEach((tag) => {
        expect(getByText(tag)).toBeInTheDocument()
      })
    })
  })
})
