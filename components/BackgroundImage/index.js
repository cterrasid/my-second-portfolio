import { useRef } from 'react'
import useImageByDevice from 'hooks/useImageByDevice'

export default function BackgroundImage() {
  const image = useImageByDevice()
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
        <div className="body">
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
      </section>
      <style jsx>{`
        section {
          align-items: flex-end;
          display: flex;
          height: 100%;
          width: 100%;
        }

        div.body {
          height: 400px;
          position: relative;
          width: 280px;
        }

        img {
          bottom: 0;
          height: 100%;
          left: 0;
          position: absolute;
          z-index: 2;
        }

        div.eyes {
          left: 51px;
          position: absolute;
          top: 110px;
          width: 90px;
          z-index: 1;
        }

        div.eye {
          background: #c3c1c1;
          background: -moz-radial-gradient(center, #c3c1c1, #8c8c8c);
          background: -webkit-radial-gradient(center, #c3c1c1, #8c8c8c);
          background: radial-gradient(ellipse at center, #c3c1c1, #8c8c8c);
          border-radius: 50%;
          display: inline-block;
          height: 18px;
          overflow: hidden;
          position: relative;
          width: 26px;
        }

        div.eye:first-child {
          margin-bottom: 2px;
        }

        div.eye:last-child {
          margin-left: 30px;
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
          height: 11px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 11px;
        }

        @media all and (min-width: 768px) {
          div.eyes {
            top: 113px;
          }

          div.eye {
            height: 15px;
          }
        }

        @media all and (min-width: 1024px) {
          div.body {
            height: 500px;
            width: 513px;
          }

          div.eyes {
            left: 210px;
            top: 130px;
            width: 110px;
          }

          div.eye {
            height: 23px;
          }

          div.eye:last-child {
            margin-left: 45px;
          }

          div.ball {
            height: 14px;
            width: 14px;
          }
        }
      `}</style>
    </>
  )
}
