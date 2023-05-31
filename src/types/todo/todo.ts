export type Todo={
    todoLabel:string,
    isTodoDone:boolean,
}

export type TodoControl={
    onTodoCheck:(e: boolean, index: number)=>void,
    onTodoDelete:(index: number)=>void,
}