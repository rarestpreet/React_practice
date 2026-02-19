import { useEffect, useState } from "react"
import { TodoContextProvider } from "./context/TodoContext"
import TodoForm from './component/TodoForm'
import TodoItem from "./component/TodoItem"


function App() {

  const [todos, setTodos] = useState([])

  const addTask = (task) => {
    console.log(task)
    
    setTodos(tasks => [...tasks, { ...task }])
  }

  const updateTask = (id, task) => {
    setTodos(tasks => tasks.map((t) => (t.id === id ? { ...t, name: task } : t)))
  }

  const deleteTask = (id) => {
    setTodos(tasks => tasks.filter(t => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(tasks => tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    // console.log(todos)
  }, [todos])

  return (
    <TodoContextProvider value={{
      todos,
      addTask,
      updateTask,
      deleteTask,
      toggleComplete
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem task={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
