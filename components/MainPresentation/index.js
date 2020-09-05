import HeaderText from 'components/HeaderText'
import ProfileImage from 'components/ProfileImage'

export default function Presentation() {
  return (
    <>
      <div>
        <HeaderText />
        <ProfileImage />
      </div>
      <style jsx>{`
        div:first-of-type {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          width: 100%;
        }
      `}</style>
    </>
  )
}
