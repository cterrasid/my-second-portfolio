import { Fragment } from 'react'
import { colors } from 'styles/theme'

export default function MenuList() {
  const items = ['Inicio', 'Sobre mi', 'Stack', 'Proyectos', 'Contacto']

  return (
    <Fragment>
      <nav>
        {items.map((item) => (
          <a key={item}>{item}</a>
        ))}
      </nav>
      <style jsx>{`
        nav {
          column-gap: 2px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin: 0;
          padding: 0;
          position: absolute;
          right: 10%;
          top: 35%;
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
          text-decoration: overline;
        }

        a:active:nth-child(2n + 1) {
          color: ${colors.blood};
        }

        a:active:nth-child(3n + 2) {
          color: ${colors.aqua};
        }

        a:active:nth-child(4n) {
          color: ${colors.eggplant};
        }
      `}</style>
    </Fragment>
  )
}
