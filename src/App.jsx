import React from 'react'
import ToDoForm from './ToDoForm'
import TodoList from './TodoList'

const App = () => {
  const [toDoList, setToDoList] = React.useState([]);
  return (
    <div>
     <section className='min-h-screen bg-blue-900 flex justify-center items-center text-white'>

      <div className='max-w-[500px] w-full bg-blue-600 rounded-md p-4'>
        <h5 className='text-center mb-5 text-3xl font-semibold'>To Do List</h5>
        <ToDoForm toDoList={toDoList} setToDoList={setToDoList} />

        <TodoList toDoList={toDoList}/>

      </div>

     </section>
    </div>
  )
}

export default App