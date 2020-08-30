import { colors, breakpoints } from 'styles/theme'

export default function Description() {
  return (
    <>
      <section>
        <p>
          Me encanta el mundo de la programación y la tecnología, por su
          transversalidad y los constantes retos que supone, así como la
          oportunidad de llevar mi potencial creativo y analítico al siguiente
          nivel.
        </p>
      </section>
      <style jsx>{`
        section {
          background: ${colors.blackPure};
          color: ${colors.beige};
          display: grid;
          height: 100vh;
          place-items: center;
        }

        p {
          font-size: 20px;
          width: 50%;
        }

        p::first-letter {
          font-size: 30px;
          font-weight: bold;
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          p {
            font-size: 30px;
          }

          p::first-letter {
            font-size: 40px;
          }
        }
      `}</style>
    </>
  )
}
