import React, {useState} from 'react';
import "./../../ColorBox.css";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";

const getRandomColor = () => {
  const arrColor = ["yellow", "red", "blue", "green", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return arrColor[randomIndex];
}



const UseStateHook = () => {

  const [color, setColor] = useState(() => {
    const initialSate = localStorage.getItem("box_color") || "deeppink";
    console.log(initialSate);
    return initialSate;
  });

  const arrTodo = [
    {
      id: 1,
      title: "dep trai",
      name: "Duong"
    },
    {
      id: 2,
      title: "xấu  trai",
      name: "Lũng"
    },
    {
      id: 3,
      title: "quá dep trai",
      name: "Duong 2"
    },
    {
      id: 4,
      title: "OK dep trai",
      name: "Duong OK"
    }
  ];

  const [todoList, setTodoList] = useState(arrTodo);;

  const handleBoxColor = () => {
    const newColor = getRandomColor();
    localStorage.setItem("box_color", newColor )
    setColor(newColor);
  };

  const onHandleTodoClick = (data) => {
    const index = todoList.findIndex((ind) => ind.id === data.id);
    if(index < 0) return undefined;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const onHandleSubmit = (data) => {
    console.log(data);
    const newTodoList = [...todoList];
    const newData = {
      id: todoList.length + 1,
      ...data
    };
    newTodoList.push(newData);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>useState Hook</h1>

      <div
        className="color-box"
        style={{backgroundColor: color}}
        onClick={handleBoxColor}
      >
        COLOR BOX
      </div>
      <hr/>
      <h1>TodoList</h1>
      <TodoList 
        todos={todoList} 
        onTodoLick={onHandleTodoClick} 
      />
      <hr/>
      <TodoForm onSubmit={onHandleSubmit} />
    </div>
  )
}

export {UseStateHook};
