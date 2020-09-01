import Head from 'next/head'
import Presentation from 'components/MainPresentation'
import { colors, breakpoints } from 'styles/theme'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Clarette Terrasi Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Presentation />
      </main>

      <style jsx>{`
        main {
          align-items: center;
          background: ${colors.beige};
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          width: 100%;
          z-index: 0;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          main {
            padding: 0;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          main {
            background: linear-gradient(
              45deg,
              ${colors.beigeDarkGrey} 0%,
              ${colors.beigeGrey} 0%,
              ${colors.beige} 18%
            );
          }
        }
      `}</style>
    </>
  )
}
