import React from 'react'

const TodoList = (children) => {

  const onHandleClick = (rowData) => {
    if(children.onTodoLick) {
      children.onTodoLick(rowData);
    }
  }

  return (
    <div>
      <ul>
        {children.todos.map((data) => (
          <li 
            key={data.id}
            onClick={() => onHandleClick(data)}
          >
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export {TodoList};
