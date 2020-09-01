import { Fragment, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Navigation from 'components/Navigation'
import { colors, breakpoints } from 'styles/theme'
import useWindowSize from 'hooks/useWindowsSize'
import { pxToRem } from 'styles/utils'

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
        {show ? <Navigation /> : false}
      </section>
      <style jsx>{`
        section {
          align-items: flex-end;
          backdrop-filter: blur(1px);
          background: ${colors.blackPure};
          bottom: ${pxToRem({ px: 20 })};
          display: flex;
          flex-direction: column;
          mix-blend-mode: difference;
          padding: ${pxToRem({ px: 10 })};
          position: fixed;
          right: ${pxToRem({ px: 20 })};
          z-index: 2;
        }

        span {
          cursor: pointer;
          display: grid;
          height: ${pxToRem({ px: 20 })};
          place-items: center;
          width: ${pxToRem({ px: 20 })};
        }

        @media all and (min-width: ${breakpoints.tablet}px) {
          section {
            align-items: center;
            backdrop-filter: blur(3px);
            bottom: unset;
            column-gap: ${pxToRem({ px: 20 })};
            flex-direction: row-reverse;
            height: ${pxToRem({ px: 60 })};
            padding-right: ${pxToRem({ px: 40 })};
            right: 0;
            top: 0;
            width: 100%;
          }
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section {
            backdrop-filter: none;
            height: ${pxToRem({ px: 100 })};
          }
        }
      `}</style>
    </Fragment>
  )
}
