import { Fragment } from 'react'
import Head from 'next/head'
import { colors, breakpoints } from 'styles/theme'
import BackgroundImage from 'components/BackgroundImage'
import HeaderText from 'components/HeaderText'
import Description from './description'
import useWindowSize from 'hooks/useWindowsSize'
import HorizontalScroll from 'react-scroll-horizontal'

export default function Home() {
  const { isLaptop } = useWindowSize()

  return (
    <Fragment>
      <Head>
        <title>Home | Clarette Terrasi Díaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!isLaptop ? (
          <>
            <div>
              <HeaderText />
              <BackgroundImage />
            </div>
            <div>
              <Description />
            </div>
          </>
        ) : (
          <HorizontalScroll reverseScroll={true}>
            <div>
              <HeaderText />
              <BackgroundImage />
            </div>
            <div>
              <Description />
            </div>
          </HorizontalScroll>
        )}
      </main>
      <style jsx>{`
        main {
          align-items: center;
          background: linear-gradient(
            45deg,
            ${colors.beigeDarkGrey} 0%,
            ${colors.beigeGrey} 0%,
            ${colors.beige} 18%
          );
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: flex-end;
          width: 100%;
          z-index: 0;
        }

        div {
          z-index: 0;
        }

        div:first-of-type {
          width: 100%;
          height: 100%;
        }

        div:last-of-type {
          width: 100%;
          height: 0%;
        }

        @media all and (min-width: ${breakpoints.tablet}) {
          main {
            padding: 0;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}) {
          div:first-of-type {
            width: 100vw;
          }

          div:last-of-type {
            width: 100vw;
          }
        }
      `}</style>
    </Fragment>
  )
}
