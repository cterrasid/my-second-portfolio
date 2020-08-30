import { colors, breakpoints } from 'styles/theme'
import Presentation from 'components/MainPresentation'

export default function MainHome() {
  return (
    <>
      <main>
        <Presentation />
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

        @media all and (min-width: ${breakpoints.tablet}px) {
          main {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}
