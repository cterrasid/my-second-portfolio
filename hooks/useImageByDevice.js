import { useState, useEffect } from 'react'
import useWindowSize from './useWindowsSize'

export default function useImageByDevice() {
  const { isLaptop, isMobile, isTablet, windowWidth } = useWindowSize()
  const [image, setImage] = useState('')

  useEffect(() => {
    isMobile || isTablet
      ? setImage('/without-eyes-complete.png')
      : isLaptop && setImage('/without-eyes-complete.png')
  }, [windowWidth, image])

  return image
}
