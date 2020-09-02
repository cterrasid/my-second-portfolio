import { fonts, colors, breakpoints } from 'styles/theme'
import { pxToRem } from 'styles/utils'

export default function Tag({ name, children }) {
  return (
    <section>
      <span>{`<${name}>`}</span>
      <div>{children}</div>
      <span>{`</${name}>`}</span>

      <style jsx>{`
        section {
          display: grid;
          grid-template-areas: 'open content close';
        }

        span {
          color: ${colors.beigeMedium};
          font-family: ${fonts.secondary};
          font-size: ${pxToRem({ px: 12 })};
        }

        span:first-child {
          grid-area: 'open';
          align-self: flex-start;
          margin-right: ${pxToRem({ px: 5 })};
        }

        span:last-child {
          grid-area: 'close';
          align-self: flex-end;
          margin-left: ${pxToRem({ px: 5 })};
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section:last-child {
            align-self: flex-end;
            margin-right: ${pxToRem({ px: 15 })};
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          span {
            font-size: ${pxToRem({ px: 18 })};
          }
        }
      `}</style>
    </section>
  )
}
