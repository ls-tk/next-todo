export type Todo={
    todoLabel:string,
    isTodoDone:boolean,
}

export type TodoControl={
    onTodoCheck:(arg0: boolean, index?: number)=>void,
    onTodoDelete:(index?: number)=>void,
}