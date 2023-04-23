import { Container } from '../../components/layout/Container/Container'
import { FunctionComponent } from 'react'
import { Flex } from '../../components/layout/Flex/Flex'
import Icon from '../../components/data-display/Icon'
import { Typography } from '../../components/data-display/Typography/Typography'
import Link from 'next/link'

export interface RootLayoutProps {}

export const RootLayout: FunctionComponent<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prism-themes/themes/prism-material-oceanic.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="h-screen">
        <div className="p-4 pt-0 w-auto h-full bg-background">
          <nav className="sticky top-0 h-16 flex items-center justify-between z-10 bg-white bg-opacity-90 lg:bg-opacity-0">
            <Link href="/">
              <Flex.Row align="center" justify="start" gap="xs">
                <Icon.Cowboy className="w-10 h-10" />
                <Typography.Heading2>{'katebrune.net'}</Typography.Heading2>
              </Flex.Row>
            </Link>
            <Flex.Row align="center" justify="start" gap="xs">
              <Link href="https://github.com/katebrune">
                <Icon.Github className="w-10 h-10" />
              </Link>
            </Flex.Row>
          </nav>
          <main className="relative mx-8 sm:mx-8 md:mx-16 lg:mx-52 xl:mx-96 pb-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
