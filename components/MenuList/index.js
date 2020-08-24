import { Fragment } from 'react'
import Link from 'next/link'
import { breakpoints, colors, fonts } from 'styles/theme'

export default function MenuList() {
  const items = [
    { link: '/', name: 'Inicio' },
    { link: '/about', name: 'Sobre mi' },
    { link: '/projects', name: 'Proyectos' },
    { link: '/contact', name: 'Contacto' },
  ]

  return (
    <Fragment>
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
          row-gap: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin: 0;
          max-width: 115px;
          padding: 0;
          mix-blend-mode: difference;
          transform: scale(1);
        }

        a {
          color: ${colors.beige};
          cursor: pointer;
          display: flex;
          font-family: monospace;
          font-size: 12px;
          letter-spacing: -1px;
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

        @media all and (min-width: ${breakpoints.tablet}) {
          nav {
            flex-direction: row;
            justify-content: space-evenly;
            max-width: unset;
            width: 60%;
          }

          a {
            font-size: 15px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}) {
          nav {
            align-items: center;
            right: 0%;
            width: 60%;
          }

          a {
            font-family: ${fonts.tertiary};
            font-size: 18px;
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
            border-radius: 9999px;
            height: 35px;
            padding: 5px 30px;
            text-decoration: none;
            text-transform: capitalize;
            width: 140px;
          }
        }
      `}</style>
    </Fragment>
  )
}
