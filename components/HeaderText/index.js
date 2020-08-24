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

        @media all and (min-width: ${breakpoints.tablet}) {
          section {
            bottom: 40px;
            max-width: 463px;
            padding-top: 0;
            position: absolute;
            right: 0;
            top: unset;
            width: 60%;
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

        @media all and (min-width: ${breakpoints.laptop}) {
          section {
            bottom: 30%;
            left: 18%;
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

        @keyframes vibrate {
          from {
            transform: translateX(0px);
            animation-timing-function: cubic-bezier(0.25, 0.01, 0.55, 0.16);
          }
          10% {
            transform: translateX(2px);
            animation-timing-function: cubic-bezier(0.52, 0.44, 0.47, 0.44);
          }
          20% {
            transform: translateX(-2p) x;
            animation-timing-function: cubic-bezier(0.53, 0.56, 0.48, 0.56);
          }
          30% {
            transform: translateX(0px);
            animation-timing-function: cubic-bezier(0.45, 0.84, 0.75, 0.99);
          }
        }
      `}</style>
    </section>
  )
}
