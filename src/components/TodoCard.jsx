import React from "react";

export default function TodoCard(props) {
  const { children,handleDeleteTodo,index,UpdateTodo } = props;


  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-trash" onClick={()=>{
            handleDeleteTodo(index)
        }}></i>
        <i className="fa-solid fa-pen-to-square"onClick={()=>{
            UpdateTodo(index)
        }}></i>
      </div>
    </li>
  );
}
