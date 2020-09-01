import Link from 'next/link'
import { breakpoints, colors, fonts } from 'styles/theme'
import { pxToRem } from 'styles/utils'

export default function Navigation() {
  const items = [
    { link: '/', name: 'Inicio' },
    { link: '/about', name: 'Sobre mi' },
    { link: '/projects', name: 'Proyectos' },
    { link: '/contact', name: 'Contacto' },
  ]

  return (
    <>
      <nav>
        {items.map(({ link, name }) => (
          <Link href={link} key={name}>
            <a>{name}</a>
          </Link>
        ))}
      </nav>
      <style jsx>{`
        nav {
          align-items: flex-end;
          bottom: 0;
          display: flex;
          flex-direction: column;
          height: ${pxToRem({ px: 150 })};
          justify-content: space-evenly;
          margin: 0;
          max-width: ${pxToRem({ px: 115 })};
          mix-blend-mode: difference;
          padding: 0;
          position: absolute;
          right: ${pxToRem({ px: 50 })};
          transform: scale(1);
        }

        a {
          color: ${colors.beige};
          cursor: pointer;
          display: flex;
          font-family: monospace;
          font-size: ${pxToRem({ px: 18 })};
          letter-spacing: ${pxToRem({ px: -1 })};
          text-transform: lowercase;
          text-decoration: none;
        }

        a:hover,
        a:active,
        a:focus {
          text-decoration: overline;
          font-weight: bold;
        }

        span {
          margin: 0 10px;
          font-weight: bold;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          nav {
            align-items: center;
            flex-direction: row;
            height: ${pxToRem({ px: 60 })};
            justify-content: space-evenly;
            max-width: unset;
            width: 60%;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          nav {
            align-items: center;
            right: 0%;
            width: 60%;
          }

          a {
            font-family: ${fonts.tertiary};
            letter-spacing: 0px;
            text-transform: initial;
          }

          a:hover:last-of-type,
          a:focus:last-of-type,
          a:active:last-of-type {
            color: ${colors.blackPure};
            background: ${colors.beige};
          }

          a:last-of-type {
            color: ${colors.blackPure};
            background: ${colors.beige};
            border-radius: ${pxToRem({ px: 100 })};
            height: ${pxToRem({ px: 35 })};
            padding: ${pxToRem({ px: 5 })} ${pxToRem({ px: 30 })};
            text-decoration: none;
            text-transform: capitalize;
            width: ${pxToRem({ px: 140 })};
          }
        }
      `}</style>
    </>
  )
}
