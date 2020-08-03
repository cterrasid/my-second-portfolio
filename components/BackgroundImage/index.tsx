import { useRef } from "react";
import useImageByDevice from "../../hooks/useImageByDevice";
import styles from "./styles";

export default function BackgroundImage() {
  const image = useImageByDevice();
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  const handleMouseMove = e => {
    const { clientX, clientY } = e.nativeEvent;
    const x = clientX * 100 / window.innerWidth + "%";
    const y = clientY * 100 / window.innerHeight + "%";
    const eyeLeft: any = eyeLeftRef.current;
    const eyeRight: any = eyeRightRef.current;
    eyeLeft.style.left = x;
    eyeRight.style.left = x;
    eyeLeft.style.top = y;
    eyeRight.style.top = y;
    eyeRight.style.transform = `translate(-${x}, -${y})`;
    eyeLeft.style.transform = `translate(-${x}, -${y})`;
  };

  return (
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
      <style jsx>{styles}</style>
    </section>
  );
}
