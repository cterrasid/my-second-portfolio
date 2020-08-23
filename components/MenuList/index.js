import { Fragment } from 'react'
import { breakpoints, colors } from 'styles/theme'
import useWindowsSize from 'hooks/useWindowsSize'

export default function MenuList() {
  const items = ['Inicio', 'Sobre mi', 'Stack', 'Proyectos', 'Contacto']
  const firstItem = items[0]

  const { isLaptop } = useWindowsSize()
  return (
    <Fragment>
      <nav>
        {items.map((item, index) =>
          item === firstItem ? (
            <a key={item}>{item}</a>
          ) : (
            <>
              {isLaptop && <span key={index}>/</span>}
              <a key={item}>{item}</a>
            </>
          )
        )}
      </nav>
      <style jsx>{`
        nav {
          align-items: center;
          column-gap: 2px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin: 0;
          max-width: 115px;
          padding: 0;
          position: absolute;
          right: 10%;
          top: 37%;
          transform: scale(1);
          width: 35%;
          z-index: 2;
        }

        a {
          cursor: pointer;
          display: flex;
          font-size: 12px;
          letter-spacing: -1px;
          text-transform: uppercase;
          text-decoration: line-through;
        }

        a:hover {
          text-decoration: none;
        }

        a:hover:nth-of-type(2n + 1) {
          color: ${colors.blood};
        }

        a:hover:nth-of-type(3n + 2) {
          color: ${colors.aqua};
        }

        a:hover:nth-of-type(4n) {
          color: ${colors.eggplant};
        }

        span {
          margin: 0 10px;
          font-weight: bold;
        }

        @media all and (min-width: ${breakpoints.tablet}) {
          nav {
            max-width: unset;
            top: 5%;
            width: 21%;
          }

          a {
            font-size: 18px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}) {
          nav {
            max-width: 235px;
            justify-content: flex-start;
            right: 8%;
            top: 9%;
            width: 23%;
          }

          a {
            font-size: 21px;
          }
        }
      `}</style>
    </Fragment>
  )
}
