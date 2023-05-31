import React from "react";
// import * as Types from 'src/types/types'

import InputAndButton from 'src/molecules/InputAndButton'


const TodoHead = (props:any) => {
  return (
    <>
      <p>{props.errorMessage}</p>
      <InputAndButton
        inputText={props.inputText}
        buttonText={props.buttonText}
        onChange={(e)=>{
          props.onChange(e)
        }}
        onClick={props.onClick}
      />
    </>
  );
};

export default TodoHead;