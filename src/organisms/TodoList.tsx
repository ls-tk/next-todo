/* eslint-disable react/jsx-key */
import React from "react";
// import * as Types from 'src/types/types'

import TodoRow from "src/molecules/TodoRow";


const TodoList = (props:any) => {
  return (
    <>
      <ul>
        {props.todoList.map((todo:any,index:number)=>{
          return (
            <li key={index}>
              <TodoRow
                todoLabel={todo.todoLabel}
                isTodoDone={todo.isTodoDone}
                onTodoCheck={(e)=>{
                  props.onTodoCheck(e,index)
                }}
                buttonText={todo.buttonText}
                onTodoDelete={()=>{
                  props.onTodoDelete(index)
                }}
              />
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default TodoList;