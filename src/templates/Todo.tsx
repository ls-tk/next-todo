import React from "react";
import cloneDeep from "lodash/cloneDeep"
import * as Types from 'src/types/types'
import { useState } from 'react'

import TodoHead from 'src/organisms/TodoHead'
import TodoList from 'src/organisms/TodoList'

const Todo = () => {
  const [inputValue,setInputValue]=useState<string>('')

  const [todoList,setTodoList]=useState<Types.Todos>([
    {
      todoLabel:'朝起きる',
      isTodoDone:false,
    }
  ])

  const [errorMessage,setErrorMessage]=useState<string>('')

  const addTodoList=()=>{

    if(inputValue===''){
      setErrorMessage('テキストを入力してください')
    }else{
      setErrorMessage('')
      setTodoList((prevTodoList)=>{
        const tempPrevTodoList=cloneDeep(prevTodoList)
        tempPrevTodoList.push({
          todoLabel:inputValue,
          isTodoDone:false,
        })
        return tempPrevTodoList
      })
    }
  }

  const deleteTodo=(index:any)=>{
    setTodoList((prevTodoList)=>{
      const tempPrevTodoList=cloneDeep(prevTodoList)
      tempPrevTodoList.splice(index,1)
      return tempPrevTodoList
    })
  }

  return (
    <>
      <TodoHead
        inputText={inputValue}
        buttonText="Add"
        onChange={(e)=>{
          setInputValue(e)
        }}
        onClick={()=>{
          addTodoList()
          setInputValue('')
        }}
        errorMessage={errorMessage}
      />
      <TodoList
        todoList={todoList}
        onTodoCheck={(e,index)=>{
          setTodoList((prevTodoList)=>{
            const todo=[...prevTodoList]
            todo[index]={...todo[index],isTodoDone:e}
            return todo
          })
        }}
        onTodoDelete={(index)=>{
          deleteTodo(index)
        }}
      />
    </>
  );
};

export default Todo;