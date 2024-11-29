
import React from 'react'

const ToDoForm = ({setToDoList,toDoList}) => {
  const refTask = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')

  const handleTask = () => {
    setToDoList([
      ...toDoList,
      {
      task: refTask.current.value
      }
  ])
  }
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  
  return (
    <>
    <div className='todo-form'>
          <form action=""> 
            <label htmlFor="">To Do:</label>
            <input type="text" className='w-full px-2 py-2 rounded-md mb-3 text-black ' ref={refTask} inputValue={inputValue} onChange={handleChange}/>
            <button className='px-3 py-2 rounded-md bg-blue-400 text-black w-full' type='reset' onClick={handleTask} disabled={!inputValue}> Add To Do</button>
          </form>
        </div>
    </>
  )
}

export default ToDoForm