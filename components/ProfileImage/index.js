import { useRef } from 'react'
import { pxToRem } from 'styles/utils'
import { colors, breakpoints } from 'styles/theme'

export default function ProfileImage() {
  const image = '/without-eyes-complete.png'
  const eyeLeftRef = useRef()
  const eyeRightRef = useRef()

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e.nativeEvent
    const x = (clientX * 100) / window.innerWidth + '%'
    const y = (clientY * 100) / window.innerHeight + '%'
    const eyeLeft = eyeLeftRef.current
    const eyeRight = eyeRightRef.current
    eyeLeft.style.left = x
    eyeRight.style.left = x
    eyeLeft.style.top = y
    eyeRight.style.top = y
    eyeRight.style.transform = `translate(-${x}, -${y})`
    eyeLeft.style.transform = `translate(-${x}, -${y})`
  }

  return (
    <>
      <section onMouseMove={handleMouseMove}>
        <div>
          <div>
            <img src={image} alt="Imagen de Clarette" />
            <div className="eyes">
              <div className="eye">
                <div className="left ball" ref={eyeLeftRef} />
              </div>
              <div className="eye">
                <div className="right ball" ref={eyeRightRef} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          align-items: flex-start;
          display: flex;
          height: 100%;
          justify-content: center;
          width: 100%;
        }

        section > div:first-of-type {
          border-radius: 50%;
          height: ${pxToRem({ px: 200 })};
          overflow: hidden;
          position: relative;
          width: ${pxToRem({ px: 200 })};
        }

        section > div:first-of-type > div:first-of-type {
          display: flex;
          left: 50%;
          position: absolute;
          top: ${pxToRem({ px: 55 })};
          transform: translateX(-50%);
          width: ${pxToRem({ px: 400 })};
        }

        img {
          height: ${pxToRem({ px: 390 })};
          width: 100%;
          z-index: 2;
        }

        div.eyes {
          left: 40%;
          position: absolute;
          top: 26%;
          width: 21%;
          z-index: 1;
        }

        div.eye {
          background: radial-gradient(
            ellipse at center,
            ${colors.beigeGrey},
            ${colors.beigeDarkGrey}
          );
          border-radius: 50%;
          display: inline-block;
          height: ${pxToRem({ px: 18 })};
          overflow: hidden;
          position: relative;
          width: ${pxToRem({ px: 26 })};
        }

        div.eye:first-child {
          margin-bottom: ${pxToRem({ px: 2 })};
        }

        div.eye:last-child {
          margin-left: ${pxToRem({ px: 30 })};
        }

        div.left {
          background: black url('/left-eye.png') no-repeat center center;
        }

        div.right {
          background: black url('/right-eye.png') no-repeat center center;
        }

        div.ball {
          background-size: cover;
          border-radius: 50%;
          height: ${pxToRem({ px: 11 })};
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: ${pxToRem({ px: 11 })};
        }

        @media all and (min-width: ${breakpoints.laptop}px) {
          section > div:first-of-type {
            border-radius: 0;
            height: 100%;
            width: 100%;
          }

          section > div:first-of-type > div:first-of-type {
            bottom: 0;
            height: ${pxToRem({ px: 500 })};
            left: 0;
            position: absolute;
            top: unset;
            transform: translateX(0);
            width: ${pxToRem({ px: 513 })};
          }

          img {
            height: unset;
          }

          div.eye {
            height: ${pxToRem({ px: 23 })};
            width: ${pxToRem({ px: 30 })};
          }
          div.eye:last-child {
            margin-left: ${pxToRem({ px: 40 })};
          }

          div.ball {
            height: ${pxToRem({ px: 14 })};
            width: ${pxToRem({ px: 14 })};
          }
        }
      `}</style>
    </>
  )
}
