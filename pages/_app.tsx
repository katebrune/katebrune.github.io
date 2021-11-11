import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar } from '../components/NavBar/nav-bar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>it's kate</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
