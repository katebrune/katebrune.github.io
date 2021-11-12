import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { CowboyIcon } from '../icons/cowboy'
import { GithubIcon } from '../icons/github'

export interface NavBarProps {}

export const NavBar: FunctionComponent<NavBarProps> = ({}) => {
  return (
    <nav className="sticky top-0 h-16 flex items-center justify-between">
      <Link href="/" passHref>
        <div className="flex items-center gap-3 pl-3 pt-3 cursor-pointer">
          <CowboyIcon className="w-10 h-10" />
          <p className="text-2xl text-gray-800 font-semibold">{"it's kate"}</p>
        </div>
      </Link>
      <div className="flex items-center gap-3 pr-3 pt-3">
        <a href="https://github.com/katebrune">
          <GithubIcon className="w-10 h-10" />
        </a>
      </div>
    </nav>
  )
}
