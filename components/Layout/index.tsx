import { Fragment } from "react";
import { globalStyles } from "./styles";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div>
        {children}
      </div>

      <style jsx global>{globalStyles}</style>
    </Fragment>
  );
}
