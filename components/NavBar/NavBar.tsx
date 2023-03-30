import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import styles from './NavBar.module.css'

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {}

export const NavBar: FunctionComponent<NavBarProps> = (props) => {
  return (
    <nav className={styles.NavBar} data-testid="navbar_nav" {...props}>
      <Link href="/" passHref legacyBehavior>
        <div className={styles.LeftItemGroup} data-testid="navbar_link-home">
          <Icon.Cowboy
            className={styles.Icon}
            data-testid="navbar_icon-cowboy"
          />
          <h2 className={styles.Title} data-testid="navbar_heading">
            {'katebrune.net'}
          </h2>
        </div>
      </Link>
      <div className={styles.RightItemGroup}>
        <a
          href="https://github.com/katebrune"
          aria-label="link to katebrune on github"
          data-testid="navbar_link-github"
        >
          <Icon.Github
            className={styles.Icon}
            data-testid="navbar_icon-github"
          />
        </a>
      </div>
    </nav>
  );
}
