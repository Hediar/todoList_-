import React from "react";
import { styled } from "styled-components";
function MyButton(props) {
  function buttonSizefunc(size = 5) {
    return `${size * 1}px ${size * 2}px`;
  }

  function fontSizefunc(size = 5) {
    return `${size * 3 + 2}px`;
  }

  const MyButton = styled.button`
    margin: 0;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: "Noto Sans KR", Courier New;
    font-size: ${fontSizefunc(props.fontSize)};
    padding: ${buttonSizefunc(props.buttonSize)};
    border-radius: 5px;
    /* color: #000000; */

    &:hover {
      background: #dddddd;
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
      background: #ffffff;
    }
  `;

  return (
    <MyButton
      className="MyButton"
      id={props.buttonId}
      onClick={props.func}
      buttonSize={props.buttonSize}
      fontSize={props.fontSize}
    >
      {props.title}
    </MyButton>
  );
}

export default MyButton;
