import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "todo msg",
        complete: false
    }],
    addTodo: ()=>{},
    updateTodo: ()=>{},
    deleteTodo: ()=>{},
    toggleCompletion: ()=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider