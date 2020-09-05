import { colors, breakpoints } from 'styles/theme'
import { pxToRem } from 'styles/utils'
import Tag from 'components/Tag'
import SocialNetworks from 'components/SocialNetworks'

export default function HeaderText() {
  return (
    <>
      <section>
        <Tag name="p">
          <p>¡Hola!, soy</p>
        </Tag>
        <Tag name="h1">
          <h1>
            <span>Clarette</span> Terrasi Díaz
          </h1>
        </Tag>
        <Tag name="h2">
          <h2>Frontend Developer</h2>
        </Tag>
        <SocialNetworks />
      </section>
      <style jsx>{`
        section {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: ${pxToRem({ px: 230 })};
        }

        p {
          font-weight: 300;
          margin: 0;
        }

        h1 {
          font-size: ${pxToRem({ px: 28 })};
          margin: 0;
          width: fit-content;
        }

        h1 > span {
          color: ${colors.eggplant};
        }

        h2 {
          font-size: ${pxToRem({ px: 18 })};
          font-weight: 500;
          margin: 0;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            padding-top: ${pxToRem({ px: 60 })};
            width: ${pxToRem({ px: 435 })};
          }

          p {
            font-size: ${pxToRem({ px: 20 })};
          }

          h1 {
            font-size: ${pxToRem({ px: 40 })};
            width: max-content;
          }

          h2 {
            font-size: ${pxToRem({ px: 25 })};
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            height: unset;
            position: absolute;
            padding: 0;
            top: 50%;
            left: 40%;
            width: ${pxToRem({ px: 510 })};
            z-index: 1;
          }

          h1 {
            font-size: ${pxToRem({ px: 45 })};
          }

          h2 {
            font-size: ${pxToRem({ px: 30 })};
          }
        }
      `}</style>
    </>
  )
}
