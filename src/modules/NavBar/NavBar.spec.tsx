import { render, screen } from '@testing-library/react'

import { NavBar } from './NavBar'

describe('<NavBar />', () => {
  it('renders <nav /> element', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_nav')).toBeInTheDocument()
  })
  it('renders <CowboyIcon />', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_icon-cowboy')).toBeInTheDocument()
  })
  it('renders <h2> element with title', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_heading')).toHaveTextContent(
      'katebrune.net',
    )
  })
  it('renders <Link> to go home', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_link-home')).toBeInTheDocument()
  })
  it('renders <a> to go to github', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_link-github')).toBeInTheDocument()
    expect(screen.getByTestId('navbar_link-github')).toHaveProperty(
      'href',
      'https://github.com/katebrune',
    )
  })
  it('renders <GithubIcon>', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar_icon-github')).toBeInTheDocument()
  })
})
