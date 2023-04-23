import 'reflect-metadata'
import '../../styles/globals.css'
import { RootLayout } from '../modules/RootLayout/RootLayout'

export const metadata = {
  title: "Kate's Blog",
}

export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}
