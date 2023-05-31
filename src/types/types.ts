import {Todo as todo, TodoControl as todoControl} from '@component/types/todo/todo'


import propsInput from '@component/atom/type/propsInput'
import propsButton from '@component/atom/type/propsButton'
import propsCheckbox from '@component/atom/type/propsCheckbox'


export type Todo = todo
export type Todos = todo[];
export type TodoControl = todoControl;

export type PropsInput = propsInput;
export type PropsButton = propsButton;
export type PropsCheckbox = propsCheckbox;
export type PropsInputAndButton = propsInput & propsButton
export type PropsTodoHead= PropsInputAndButton & {errorMessage:string}
export type PropsTodoRow = todo & todoControl;
export type PropsTodoList= {todoList:Todo[]} & todoControl