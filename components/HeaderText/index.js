import Tag from 'components/Tag'
import { fonts, colors, breakpoints } from 'styles/theme'

export default function HeaderText() {
  // const handleClick = () => {
  //   console.log('cambiar')
  // }

  return (
    <section>
      <Tag name="h2">
        <h2>¡Hola!, soy Clarette Terrasi Díaz,</h2>
      </Tag>
      <Tag name="h1">
        <h1>Frontend Developer</h1>
      </Tag>
      {/* <Tag name="h3">
        <h3 onClick={handleClick}>y si no te gusta...</h3>
      </Tag> */}
      <style jsx>{`
        section {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          align-self: flex-end;
          width: 70%;
          max-width: 225px;
        }

        h1 {
          margin: 0;
          font-size: 30px;
          font-weight: 900;
        }

        h2 {
          margin: 0;
          font-size: 12px;
          font-weight: 300;
          width: 70px;
        }

        h3 {
          margin: 0;
          font-family: ${fonts.secondary};
          color: ${colors.grey};
          font-size: 14px;
          font-weight: normal;
          align-self: flex-end;
          cursor: pointer;
          animation: vibrate 0.5s infinite alternate;
        }

        @media all and (min-width: ${breakpoints.tablet}) {
          section {
            padding-top: 0;
            width: 60%;
            max-width: 463px;
            position: absolute;
            right: 0;
            bottom: 40px;
          }

          h1 {
            font-size: 35px;
          }

          h2 {
            font-size: 15px;
            align-self: flex-start;
            width: unset;
          }

          h3 {
            font-size: 18px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}) {
          section {
            bottom: 30%;
            max-width: 615px;
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
            right: 20%;
            max-width: 690px;
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
