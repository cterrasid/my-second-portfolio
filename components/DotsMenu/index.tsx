import { Fragment } from "react";
import { colors } from "../../styles/theme";

export default function DotsMenu() {
  const onClick = () => {
    console.log("click");
  };

  return (
    <Fragment>
      <section onClick={onClick}>
        <span />
      </section>
      <style jsx>{`
        section {
          position: absolute;
          right: 10px;
          bottom: 10px;
          cursor: pointer;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
        }

        span {
          position: relative;
          background-color: ${colors.blackPure};
          border-radius: 50%;
          animation: wave 4s linear infinite;
          height: 4px;
          width: 4px;
          transition: transform 1s ease-out, height 2s, width 2s;
        }

        span:after,
        span:before {
          position: absolute;
          content: "";
          background-color: ${colors.blackPure};
          border-radius: 50%;
          height: 4px;
          width: 4px;
          animation: wave 4s linear infinite;
          transition: transform 1s ease-out, height 1s, width .1s;
        }

        span:after {
          left: 8px;
          animation-delay: 3s;
        }

        span:before {
          right: 8px;
          animation-delay: 2s;
        }

        span:hover {
          animation-duration: 0s;
          width: 75%;
          height: 75%;

          &:after,
          &:before {
            animation-duration: 0s;
            width: 0%;
            height: 0%;
          }

          &:after {
            transform: translateX(-8px);
          }

          &:before {
            transform: translateX(8px);
          }
        }

        @keyframes wave {
          0%,
          60%,
          100% {
            transform: initial;
          }

          30% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </Fragment>
  );
}
