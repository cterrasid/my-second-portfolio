import { colors, breakpoints } from 'styles/theme'
import { pxToRem } from 'styles/utils'

export default function Section({ children, width = 'unset' }) {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          display: grid;
          background: ${colors.blackPure};
          color: ${colors.beige};
          min-height: 100vh;
          padding: ${pxToRem({ px: 70 })} ${pxToRem({ px: 70 })}
            ${pxToRem({ px: 30 })} ${pxToRem({ px: 70 })};
          place-items: center;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            padding-left: ${pxToRem({ px: 110 })};
            padding-right: ${pxToRem({ px: 110 })};
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            height: 100vh;
            margin: 0;
            padding: ${pxToRem({ px: 110 })} ${pxToRem({ px: 200 })}
              ${pxToRem({ px: 50 })} ${pxToRem({ px: 200 })};
            width: ${width};
          }
        }

        @media all and (min-width: ${breakpoints.desktop}px) {
          section {
            padding-left: ${pxToRem({ px: 300 })};
            padding-right: ${pxToRem({ px: 300 })};
          }
        }
      `}</style>
    </>
  )
}
