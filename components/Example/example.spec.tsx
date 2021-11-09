import React from 'react'
import { render } from '@testing-library/react'
import { Example } from './example'

describe('<Example />', () => {
  it('renders the text Hello, World!', () => {
    const { getByText } = render(<Example />)
    expect(getByText('Hello, World!')).toBeInTheDocument()
  })
})
