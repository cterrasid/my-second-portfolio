import { useState, useEffect } from 'react'
import useWindowSize from 'hooks/useWindowsSize'

export default function useIconSize({ initialSize }) {
  const { isLaptop, isMobile, isTablet, windowWidth } = useWindowSize()
  const [size, setSize] = useState(initialSize)

  useEffect(() => {
    isMobile && setSize(initialSize)
    isTablet && setSize(initialSize + 4)
    isLaptop && setSize(initialSize + 6)
  }, [windowWidth, initialSize])

  return size
}
