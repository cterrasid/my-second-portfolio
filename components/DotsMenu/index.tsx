import { Fragment, useState } from "react";
import styles from "./styles";

export default function DotsMenu() {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    console.log("click");
    setIsClicked(true);
  };

  const onMouseMove = () => {
    console.log("hover");
    setIsHover(true);
  };

  const setHoverTransition = (height: string, width: string) => {
    const grow = {
      stop: "0s",
      height: height,
      width: width
    };

    return grow;
  };
  console.log(setHoverTransition("75%", "75%"));
  return (
    <Fragment>
      <section onClick={onClick}>
        <span onMouseMove={onMouseMove} />
      </section>
      <style jsx>{styles}</style>
    </Fragment>
  );
}
