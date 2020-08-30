import { Fragment, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import MenuList from 'components/MenuList'
import { colors, breakpoints } from 'styles/theme'
import useWindowSize from 'hooks/useWindowsSize'

export default function DotMenu() {
  const [show, setShow] = useState(false)
  const { windowWidth, isLaptop } = useWindowSize()

  useEffect(() => {
    isLaptop && setShow(true)
  }, [windowWidth])

  const props = useSpring({
    background: colors.beige,
    borderRadius: '50%',
    config: { tension: 200, friction: 50 },
    height: '100%',
    mixBlendMode: 'difference',
    position: 'relative',
    transform: `scale(${show ? 1.5 : 1})`,
    width: '100%',
  })

  const onClick = () => {
    setShow(!show)
  }

  return (
    <Fragment>
      <section>
        {!isLaptop && (
          <span>
            <animated.div onClick={onClick} style={props} />
          </span>
        )}
        {show ? <MenuList /> : false}
      </section>
      <style jsx>{`
        section {
          align-items: flex-end;
          backdrop-filter: blur(1px);
          background: ${colors.blackPure};
          bottom: 40%;
          display: flex;
          flex-direction: column;
          height: 125px;
          mix-blend-mode: difference;
          padding: 10px;
          position: fixed;
          right: 10%;
          row-gap: 10px;
          z-index: 2;
        }

        span {
          cursor: pointer;
          display: grid;
          height: 10px;
          place-items: center;
          width: 10px;
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            align-items: center;
            backdrop-filter: blur(3px);
            bottom: unset;
            column-gap: 20px;
            flex-direction: row-reverse;
            height: 60px;
            padding-right: 40px;
            right: 0;
            top: 0;
            width: 100%;
          }

          span {
            height: 15px;
            width: 15px;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            backdrop-filter: none;
            height: 100px;
          }

          span {
            height: 20px;
            width: 20px;
          }
        }
      `}</style>
    </Fragment>
  )
}
