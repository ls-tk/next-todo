import React from "react";
import * as Types from 'src/types/types'

const Button = (props:Types.PropsButton) => {
  return (
    <button type="button" onClick={props.onClick}>
      {props.buttonText}
      </button>
  );
};

export default Button;