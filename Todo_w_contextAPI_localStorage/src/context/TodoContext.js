import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [],
    addTask: (task) => {},
    updateTask: (id, task) => {},
    deleteTask: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider
 
export function useTodo() {
    return useContext(TodoContext)
}