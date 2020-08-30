import Tag from 'components/Tag'
import { fonts, colors, breakpoints } from 'styles/theme'

export default function HeaderText() {
  return (
    <section>
      <Tag name="h2">
        <h2>¡Hola!, soy Clarette Terrasi Díaz,</h2>
      </Tag>
      <Tag name="h1">
        <h1>Frontend Developer</h1>
      </Tag>

      <style jsx>{`
        section {
          align-items: flex-start;
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: 208px;
          position: absolute;
          right: 30%;
          top: 20px;
        }

        h1 {
          font-size: 30px;
          font-weight: 900;
          margin: 0;
        }

        h2 {
          font-size: 12px;
          font-weight: 300;
          margin: 0;
          width: 70px;
        }

        h3 {
          align-self: flex-end;
          animation: vibrate 0.5s infinite alternate;
          color: ${colors.grey};
          cursor: pointer;
          font-family: ${fonts.secondary};
          font-size: 14px;
          font-weight: normal;
          margin: 0;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            bottom: 40px;
            max-width: 463px;
            padding-top: 0;
            position: absolute;
            right: 0;
            top: unset;
            width: 60%;
            z-index: 0;
          }

          h1 {
            font-size: 35px;
          }

          h2 {
            align-self: flex-start;
            font-size: 15px;
            width: unset;
          }

          h3 {
            font-size: 18px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            bottom: 30%;
            left: 40%;
            max-width: 615px;
            right: unset;
          }

          h1 {
            font-size: 50px;
          }

          h2 {
            font-size: 18px;
          }
        }

        @media all and (min-width: ${breakpoints.desktop}) {
          section {
            bottom: 40%;
            max-width: 690px;
            right: 20%;
          }

          h1 {
            font-size: 60px;
          }

          h2 {
            font-size: 22px;
          }

          h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  )
}
