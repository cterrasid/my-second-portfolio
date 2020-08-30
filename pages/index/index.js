import { Fragment } from 'react'
import Head from 'next/head'
import MainHome from 'components/MainHome'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home | Clarette Terrasi Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHome />
    </Fragment>
  )
}
