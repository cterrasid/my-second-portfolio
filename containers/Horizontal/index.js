import { useEffect } from 'react'
import { breakpoints } from 'styles/theme'
import useWindowSize from 'hooks/useWindowsSize'
import HorizontalScroll from '@oberon-amsterdam/horizontal'

export default function HorizontalContainer({ children, numberOfSections }) {
  const { isLaptop, windowWidth } = useWindowSize()

  useEffect(() => {
    isLaptop && new HorizontalScroll()
  }, [windowWidth])

  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          width: 100%;
          height: 100vh;
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          div {
            min-width: ${100 * numberOfSections}vw;
          }
        }
      `}</style>
    </>
  )
}
