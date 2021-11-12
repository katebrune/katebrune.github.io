/* eslint-disable @next/next/no-css-tags */
import 'reflect-metadata'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NavBar } from '../components/NavBar'
import { useState, useCallback, useEffect } from 'react'
import { FruitSaladLoader } from '../components/FruitSaladLoader/fruit-salad-loader'

function MyApp({ Component, pageProps }: AppProps) {
  const [routeIsChanging, setRouteIsChanging] = useState(false)
  const router = useRouter()

  /* handle route change spinner */
  useEffect(() => {
    const handleStart = (url: string) => {
      if (url.includes('blog')) setRouteIsChanging(true)
    }
    const handleStop = () => {
      setRouteIsChanging(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  /* decide if component or loading spinner should be displayed */
  const getComponent = useCallback(() => {
    if (routeIsChanging) return <FruitSaladLoader />
    return <Component {...pageProps} />
  }, [routeIsChanging, Component, pageProps])

  return (
    <div>
      <Head>
        <title>{"it's kate"}</title>
      </Head>
      <NavBar />
      {getComponent()}
    </div>
  )
}
export default MyApp
