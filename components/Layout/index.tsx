import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <body>
        {children}
      </body>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Mulish;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Fragment>
  );
}
