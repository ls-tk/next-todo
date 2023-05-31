import React from "react";
import type * as Types from 'src/types/types'

const Checkbox = (props:Types.PropsCheckbox) => {
  
  return (
    <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e)=>{
          props.onCheck(e.target.checked)
        }}
    />
  );
};

export default Checkbox;