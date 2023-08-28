import 'reflect-metadata'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import { RootLayout } from '@/app/(components)/root-layout/root-layout'

export const metadata = {
  title: "kate's blog",
}

export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <RootLayout>{children}</RootLayout>
      <Analytics />
    </>
  )
}
