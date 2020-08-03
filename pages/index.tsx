import Head from "next/head";
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import HeaderText from "../components/HeaderText";
import DotsMenu from "../components/DotsMenu";

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
        <DotsMenu />
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          height: 100vh;
          width: 100%;
          background: rgb(120, 116, 110);
          background: linear-gradient(
            45deg,
            rgba(120, 116, 110, 1) 0%,
            rgba(187, 182, 175, 1) 0%,
            rgba(241, 235, 227, 1) 18%
          );
          z-index: 0;
        }

        @media all and (min-width: 768px) {
          main {
            flex-direction: row-reverse;
          }
        }
      `}</style>
    </Layout>
  );
}
