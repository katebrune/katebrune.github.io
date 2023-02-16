import { render, screen } from '@testing-library/react'

import { FruitSaladLoader } from './FruitSaladLoader'

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
