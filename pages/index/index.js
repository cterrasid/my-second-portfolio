import { Fragment } from 'react'
import Head from 'next/head'
import BackgroundImage from 'components/BackgroundImage'
import HeaderText from 'components/HeaderText'
import DotsMenu from 'components/DotsMenu'
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
        <DotsMenu />
      </main>
      <style jsx>{styles}</style>
    </Fragment>
  )
}
