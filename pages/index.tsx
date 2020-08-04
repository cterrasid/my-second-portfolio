import Head from "next/head";
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import HeaderText from "../components/HeaderText";
import Menu from "../components/Menu";
import styles from './styles'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Clarette Terrasi Díaz | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderText />
        <BackgroundImage />
        <Menu />
      </main>
      <style jsx>{styles}</style>

    </Layout>
  );
}
