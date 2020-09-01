import HorizontalContainer from 'containers/Horizontal'
import Title from 'components/Title'

export default function About() {
  return (
    <HorizontalContainer numberOfSections={2}>
      <Title title="Un poco más acerca de mi..." titleSize="50px" />
    </HorizontalContainer>
  )
}
