import {Todo as todo, TodoControl as todoControl} from '@component/types/todo/todo'


import propsInput from '@component/atom/type/propsInput'
import propsButton from '@component/atom/type/propsButton'
import propsCheckbox from '@component/atom/type/propsCheckbox'


export type Todo = todo & todoControl;
export type Todos = todo[];
export type TodoControl = todoControl;

export type PropsInput = propsInput;
export type PropsButton = propsButton;
export type PropsCheckbox = propsCheckbox;
export type PropsInputAndButton = propsInput & propsButton
export type PropsTodoHead= Omit<PropsInputAndButton,"buttonText"> & {errorMessage:string}
export type PropsTodoRow = Todo
export type PropsTodoList= {todoList:Todo[],todoControl:todoControl}

export type TemplateTodoList= {}