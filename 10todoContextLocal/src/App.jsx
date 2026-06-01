
import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './Context'
import TodoForm from './compnents/TodoForm'
import TodoItem from './compnents/TodoItems'

function App() {
  // const [todos,setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }
  const updateTodo = (id,todo) =>{
    setTodos((prev) => 
      prev.map((prevTodo)=> 
        (prevTodo.id === id ? todo: prevTodo)))
    // setTodos((prev) => prev.map((eachvla)=>{
    //   if(eachvla.id === id){
    //     todo
    //   }else{
    //     eachvla
    //   }
    // }
    // ))
  }
  const toggleCompletion = (id) => {
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id? {...prevTodo,complete: !prevTodo.complete} : prevTodo)))
  }

  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos || [];
  })

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
   <TodoContextProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCompletion}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {
                todos.map((todo)=>(
                  <div key={todo.id}
                  className='w-full'>
                    <TodoItem todo={todo} />
                  </div>
                ))
              }
          </div>
      </div>
    </div>
   </TodoContextProvider>
  )
}

export default App
