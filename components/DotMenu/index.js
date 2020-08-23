import { Fragment, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import MenuList from 'components/MenuList'
import { colors, breakpoints } from 'styles/theme'

export default function DotMenu() {
  const [show, setShow] = useState(false)

  const props = useSpring({
    transform: `scale(${show ? 1.5 : 1})`,
    position: 'relative',
    background: colors.blackPure,
    borderRadius: '50%',
    height: '100%',
    width: '100%',
    config: { tension: 200, friction: 50 },
  })

  const onClick = () => {
    setShow(!show)
  }

  return (
    <Fragment>
      <section onClick={onClick}>
        <animated.span className="span" style={props} />
      </section>
      {show ? <MenuList /> : false}
      <style jsx>{`
        section {
          position: absolute;
          right: 10%;
          bottom: 65%;
          cursor: pointer;
          width: 10px;
          height: 10px;
          display: grid;
          place-items: center;
          z-index: 2;
        }

        @media all and (min-width: ${breakpoints.tablet}) {
          section {
            bottom: unset;
            height: 15px;
            right: 5%;
            top: 10%;
            width: 15px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}) {
          section {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </Fragment>
  )
}
