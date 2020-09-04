import SectionTitle from 'components/SectionTitle'
import Section from 'containers/Section'
import { pxToRem } from 'styles/utils'
import { breakpoints } from 'styles/theme'

export default function About() {
  const aboutMain = {
    title: 'Sobre mi',
    text: `Venezolana, viviendo en Madrid desde hace más de dos
    años. Aunque estudié Geografía (y la ejercí por casi 9 años), al
    emigrar aprendí a reinventarme todos los días para sobrevivir.\n\nFue así como en el 2019, empecé en el mundo de la programación, y desde entonces, ¡no he parado!.\n\nLa tecnología me enganchó de inmediato por su transversalidad y los constantes retos que supone, así como la oportunidad de llevar mi potencial creativo y analítico al siguiente nivel.`,
  }

  const { title } = aboutMain

  return (
    <>
      <Section width="100vw">
        <div>
          <SectionTitle title={title} />
          <section>
            <p>
              <span>Venezolana</span>, viviendo en Madrid desde hace más de dos
              años. Aunque estudié Geografía (y la ejercí por casi 9 años), al
              emigrar aprendí a reinventarme todos los días para sobrevivir.
            </p>
            <p>
              Fue así como en el 2019, empecé en el mundo de la{' '}
              <code>programación</code>, y desde entonces, ¡no he parado!.
            </p>
            <p>
              La tecnología me enganchó de inmediato por su transversalidad y
              los constantes retos que supone, así como la oportunidad de llevar
              mi potencial creativo y analítico al siguiente nivel.
            </p>
          </section>
        </div>
      </Section>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
        }

        p {
          font-size: ${pxToRem({ px: 20 })};
          white-space: pre-wrap;
        }

        p::first-letter {
          font-size: ${pxToRem({ px: 30 })};
          font-weight: bold;
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            width: 50%;
          }

          div {
            align-items: center;
            flex-direction: row;
            justify-content: space-evenly;
          }

          p {
            font-size: ${pxToRem({ px: 24 })};
          }

          p::first-letter {
            font-size: ${pxToRem({ px: 34 })};
          }
        }
      `}</style>
    </>
  )
}
