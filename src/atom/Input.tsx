import React from "react";
import type * as Types from 'src/types/types'

const Input = (props:Types.PropsInput) => {
  return (
    <input
        type="text"
        value={props.inputText}
        onChange={(e)=>{
          props.onChange(e.target.value)
        }}
    />
  );
};

export default Input;