  import React from 'react'
  
  export const TodoItem = ({todo}) => {
    return (
      <div>
        <h3>{todo.sno}</h3>
        <h4>{todo.title}</h4>
        <button className="btn btn-sm btn-danger">Delete</button>
      </div>
    )
  }
  