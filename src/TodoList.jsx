import React from 'react'

const TodoList = ({toDoList}) => {
  return (
    <>
    <div>
          <ul className='mt-5'>
            {toDoList.length !== 0 ? (toDoList.map((item,key)=> (<li className='border-b-2 border-blue-200  text-lg py-2' key={key}>• {item.task}</li>))):(<h3 className='text-center'>There's nothing to do! </h3>)}
            
            
           

          </ul>
        </div>
    </>
  )
}

export default TodoList