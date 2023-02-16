import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center' >Todos list</h3>
      {props.todos.map((todo)=>{
        return <TodoItem todo={todo}f/>
      })}
      
    </div>
    
  )
}
