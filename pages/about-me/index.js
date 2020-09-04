import React from 'react'
import About from 'components/About'
import HorizontalContainer from 'containers/Horizontal'

export default function AboutMe() {
  return (
    <HorizontalContainer numberOfSections={2}>
      <About />
    </HorizontalContainer>
  )
}
