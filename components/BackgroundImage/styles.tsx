import css from "styled-jsx/css";

export default css`
section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

div.body {
  position: relative;
  height: 400px;
  width: 280px;
}

img {
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
}

div.eyes {
  width: 90px;
  position: absolute;
  top: 105px;
  left: 51px;
  z-index: 1;
}

div.eye {
  width: 26px;
  height: 23px;
  background: #c3c1c1;
  background: -webkit-radial-gradient(center, #c3c1c1, #8c8c8c);
  background: -moz-radial-gradient(center, #c3c1c1, #8c8c8c);
  background: radial-gradient(ellipse at center, #c3c1c1, #8c8c8c);
  display: inline-block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

div.eye:first-child {
  margin-bottom: 2px;
}

div.eye:last-child {
  margin-left: 30px;
}

div.left {
  background: black url("/left-eye.png") no-repeat center center;
}

div.right {
  background: black url("/right-eye.png") no-repeat center center;
}

div.ball {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  height: 11px;
  width: 11px;
  border-radius: 50%;
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
    width: 110px;
    top: 130px;
    left: 210px;
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
`