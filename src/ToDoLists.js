import React from "react";

const ToDoLists=(props)=>{
    return( 
        <>
        <div className="todo_style">

       <li>{props.text}</li>
            </div>
        </>
    )
}
export default ToDoLists;