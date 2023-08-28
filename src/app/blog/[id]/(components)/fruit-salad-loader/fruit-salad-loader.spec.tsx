import { render, screen } from '@testing-library/react'
import React from 'react'

import { FruitSaladLoader } from './fruit-salad-loader'

describe('<FruitSaladLoader>', () => {
  it('renders <Cherry> icon', () => {
    render(<FruitSaladLoader />)
    expect(
      screen.getByTestId('fruitsaladloader_icon-cherry'),
    ).toBeInTheDocument()
  })
  it('renders <Lemon> icon', () => {
    render(<FruitSaladLoader />)
    expect(
      screen.getByTestId('fruitsaladloader_icon-lemon'),
    ).toBeInTheDocument()
  })
  it('rendres <Blueberry> icon', () => {
    render(<FruitSaladLoader />)
    expect(
      screen.getByTestId('fruitsaladloader_icon-blueberry'),
    ).toBeInTheDocument()
  })
})
