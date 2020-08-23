import { Fragment } from 'react'
import Head from 'next/head'
import BackgroundImage from 'components/BackgroundImage'
import HeaderText from 'components/HeaderText'
import DotMenu from 'components/DotMenu'
import styles from './styles'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Clarette Terrasi Díaz | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderText />
        <BackgroundImage />
        <DotMenu />
      </main>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
