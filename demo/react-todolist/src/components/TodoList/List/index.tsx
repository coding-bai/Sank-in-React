import React, { FC, ReactElement } from "react";
import { ITodo } from "../Typeings";
import Item from "./Item";

interface IProps {
  todoList: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
const List:FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodo
}): ReactElement => {
  return (
    <div>
      {
        todoList && todoList.map((todo: ITodo) => (
          <Item
            key= {todo.id}
            todo = {todo}
            removeTodo = {removeTodo}
            toggleTodo = {toggleTodo}
          ></Item>
        ))
      }
    </div>
  )
}

export default List