import Tag from "../Tag";
import useWindowSize from "../../hooks/useWindowsSize";

export default function HeaderText() {
  const { isMobile, isTablet } = useWindowSize();

  const handleClick = () => {
    console.log("cambiar");
  };

  return (
    <section>
      <Tag name="h2">
        <h2>
          ¡Hola!, soy{isMobile || isTablet ? <br /> : " "}Clarette Terrasi Díaz,
        </h2>
      </Tag>
      <Tag name="h1">
        <h1>Frontend Developer</h1>
      </Tag>
      <Tag name="h3">
        <h3 onClick={handleClick}>y si no te gusta...</h3>
      </Tag>

      <style jsx>{`
        section {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          align-self: flex-end;
          width: 70%;
          padding: 30px 40px 0 0;
        }

        h1 {
          margin: 0;
          font-size: 30px;
        }

        h2 {
          margin: 0;
          font-size: 12px;
          font-weight: normal;
        }

        h3 {
          margin: 0;
          font-family: Damion, cursive;
          color: #bdbbbb;
          font-size: 14px;
          font-weight: normal;
          align-self: flex-end;
          cursor: pointer;
          animation: vibrate 100ms infinite linear;
        }

        h3::before {
          animation: luminance 500ms infinite linear;
          width: 100%;
          content: "y si no te gusta...";
          color: transparent;
          text-shadow: 0 0 5px rgba(224, 224, 224, 0.1);
          position: absolute;
          left: 0;
          top: 0;
        }

        @keyframes vibrate {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes luminance {
          from {
            color: #d1cfcf;
          }
          to {
            color: #bdbbbb;
          }
        }

        @media all and (min-width: 768px) {
          section {
            padding-top: 0;
            width: 60%;
            position: absolute;
            right: 0;
            bottom: 40px;
          }

          h1 {
            font-size: 35px;
          }

          h2 {
            font-size: 15px;
            align-self: flex-start;
          }

          h3 {
            font-size: 18px;
          }
        }

        @media all and (min-width: 1024px) {
          section {
            bottom: 30%;
            max-width: 615px;
          }

          h1 {
            font-size: 50px;
          }

          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
