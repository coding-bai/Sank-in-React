import React, {FC, ReactElement, useCallback, useReducer, useEffect} from "react";
import Input from "./Input"
import List from "./List"
import { todoReducer } from "./reducer";
import { ITodo, IState, ACTION_TYPE } from "./Typeings";
/* const initialState:IState = {
  todoList: []
} */

function init(initTodoList:ITodo[] ):IState {
  return {
    todoList: initTodoList
  }
}

const TodoList:FC = ():ReactElement => {

  //const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [state, dispatch] = useReducer(todoReducer,[], init )
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: todoList
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todoList))
  }, [state.todoList])
  /**
   * 添加
   */
  const addTodo = useCallback((todo:ITodo) => {
    //setTodoList(todoList => [...todoList, todo])
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    })
  }, [])
  
  const removeTodo = useCallback(
    (id: number): void => {
      dispatch({
        type: ACTION_TYPE.REMOVE_TODO,
        payload: id
      })
    },
    [],
  )
  
  const toggleTodo = useCallback( (id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  }, [])

  return (
    <div>
      <Input
        addTodo = {addTodo}
        todoList = {state.todoList}
      />
      <List
        todoList = {state.todoList}
        removeTodo = {removeTodo}
        toggleTodo = {toggleTodo}
      ></List>
    </div>
  )
}

export default TodoList