import { Fragment } from "react";
import { fonts } from "../../styles/theme";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div>
        {children}
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${fonts.base};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Fragment>
  );
}
