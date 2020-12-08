import { CHANGE_INPUT_VALUE, ADD_INPUT_VALUE, Delete_INPUT_VALUE } from "./actionType";
const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue !== '') {
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  }
  if (action.type === Delete_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}