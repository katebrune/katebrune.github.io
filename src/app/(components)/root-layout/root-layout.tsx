'use client'

import Link from 'next/link'
import React, { FunctionComponent, useState } from 'react'
import { cva } from 'class-variance-authority'
import classNames from 'classnames'

import { CowboyIcon } from '@/app/(components)/cowboy-icon/cowboy-icon'
import { GithubIcon } from '@/app/(components)/github-icon/github-icon'
import { LightbulbIcon } from '@/app/(components)/lightbulb-icon/lightbulb-icon'
import { Typography } from '@/components/ui/typography/typography'
import { Toggle } from '@/components/ui/toggle/toggle'
import { cn } from '@/lib/utils'

export interface RootLayoutProperties {}

export const RootLayout: FunctionComponent<RootLayoutProperties> = (
  properties,
) => {
  const [useDarkMode, setUseDarkMode] = useState(true)

  function handleToggleDarkMode() {
    setUseDarkMode((previous) => !previous)
  }

  const lightbulbVariants = cva('h-6 w-6', {
    variants: {
      variant: {
        dark: 'brightness-75 group-hover:brightness-100 group-active:brightness-100',
        light:
          'brightness-100 group-hover:brightness-75 group-active:brightness-50',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  })

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <html lang="en" className={useDarkMode ? 'dark' : ''}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prism-themes/themes/prism-material-oceanic.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950">
        <div className="h-full w-auto p-4 pt-0">
          <nav className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white/90 dark:bg-slate-950/90 lg:bg-transparent dark:lg:bg-transparent">
            <Link href="/">
              <div className="flex items-center justify-start gap-2">
                <CowboyIcon className="h-10 w-10" />
                <Typography variant="h2" className="dark:text-slate-100">
                  {"kate's blog"}
                </Typography>
              </div>
            </Link>
            <div className="flex items-center justify-start gap-4">
              <Toggle
                variant="outline"
                className={classNames('rounded-xl group', {
                  '': !useDarkMode,
                })}
                onClick={handleToggleDarkMode}
              >
                <LightbulbIcon
                  className={cn(
                    lightbulbVariants({
                      variant: useDarkMode ? 'dark' : 'light',
                    }),
                  )}
                />
              </Toggle>
              <Link href="https://github.com/katebrune">
                <GithubIcon className="h-10 w-10" />
              </Link>
            </div>
          </nav>
          <main className="relative mx-8 pb-10 sm:mx-8 md:mx-16 lg:mx-52 xl:mx-96">
            {properties.children}
          </main>
        </div>
      </body>
    </html>
  )
}
