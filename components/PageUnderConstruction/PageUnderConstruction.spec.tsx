import React from 'react'
import { render, screen } from '@testing-library/react'

import { PageUnderConstruction } from './PageUnderConstruction'

test('The gear icon is rendered', () => {
  render(<PageUnderConstruction />)
  expect(
    screen.getByTestId('pageUnderConstruction_gearIcon'),
  ).toBeInTheDocument()
})

test('The crane icon is rendered', () => {
  render(<PageUnderConstruction />)
  expect(
    screen.getByTestId('pageUnderConstruction_craneIcon'),
  ).toBeInTheDocument()
})

test('The hammer icon is rendered', () => {
  render(<PageUnderConstruction />)
  expect(
    screen.getByTestId('pageUnderConstruction_hammerIcon'),
  ).toBeInTheDocument()
})

test('The description copy is correct', () => {
  render(<PageUnderConstruction />)
  expect(
    screen.getByTestId('pageUnderConstruction_description'),
  ).toHaveTextContent('This site is under construction')
})

test('The subdescription copy is correct', () => {
  render(<PageUnderConstruction />)
  expect(
    screen.getByTestId('pageUnderConstruction_subDescription'),
  ).toHaveTextContent('Come back soon!')
})
