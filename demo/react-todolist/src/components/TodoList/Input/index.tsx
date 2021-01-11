import React, {useRef, FC, ReactElement} from "react";
import {ITodo} from "../Typeings"
interface Iprops {
  addTodo: (todo :ITodo)=> void;
  todoList: ITodo[];
}

const Input:FC<Iprops> = ({
  addTodo,
  todoList
}) :ReactElement=> {

  const inputRef = useRef<HTMLInputElement>(null)
  
  const addItem = ():void => {
    const val:string = inputRef.current!.value.trim()
    if(val.length) {
      const isExist = todoList.find(todo => todo.content === val)
      if(isExist) {
        alert("已存在")
        return;
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false
      })
      inputRef.current!.value = ""
    } else {
      alert("请输入待办事项！！!")
    }
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入您的待办项" ref={inputRef} />
      <button onClick={addItem}>添加</button>
    </div>
  )
}

export default Input