import React from "react";
import * as Types from 'src/types/types'

import Button from 'src/atom/Button'
import Checkbox from 'src/atom/Checkbox'

const TodoRow = (props:Types.PropsTodoRow) => {
  return (
    <>
      <span>
        {`${props.todoLabel}${props.isTodoDone?'【済】':''}`}
      </span>
      <Checkbox
        isChecked={props.isTodoDone}
        onCheck={(e)=>{
          props.onTodoCheck(e)
        }}
      />
      <Button
        buttonText="×"
        onClick={props.onTodoDelete}
      />
    </>
  );
};

export default TodoRow;