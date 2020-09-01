import HeaderText from 'components/HeaderText'
import ProfileImage from 'components/ProfileImage'
import { breakpoints } from 'styles/theme'

export default function Presentation() {
  return (
    <>
      <div>
        <HeaderText />
        <ProfileImage />
      </div>
      <style jsx>{`
        div {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          width: 100%;
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          div {
            position: relative;
          }
        }
      `}</style>
    </>
  )
}
