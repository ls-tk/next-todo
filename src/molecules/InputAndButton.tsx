import React from "react";
import * as Types from 'src/types/types'

import Input from 'src/atom/Input'
import Button from 'src/atom/Button'

const InputAndButton = (props:Types.PropsInputAndButton) => {
  return (
    <>
      <Input
        inputText={props.inputText}
        onChange={(e)=>{
          props.onChange(e)
        }}
      />
      <Button
        buttonText={props.buttonText}
        onClick={props.onClick}
      />
    </>
  );
};

export default InputAndButton;