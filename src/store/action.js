import { CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, Delete_INPUT_VALUE } from "./actionType";
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const addInputValue = () => ({
  type: ADD_INPUT_VALUE
})

export const deleteItem = (index) => ({
  type: Delete_INPUT_VALUE,
  value: index
})