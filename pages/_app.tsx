/* eslint-disable @next/next/no-css-tags */
import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar } from '../components/NavBar/NavBar'
import styles from '../styles/Page.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{"Kate's Blog"}</title>
      </Head>
      <div className={styles.Page}>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp
