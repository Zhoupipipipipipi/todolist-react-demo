import { CHANGE_INPUT_VALIE, ADD_TODO_ITEM, DEL_ITEM } from './actiontypes'

const defaultState = {
  inputValue: '',
  todoList: []
}

// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
  // console.log(action)
  if (action.type === CHANGE_INPUT_VALIE) {
    const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.splice(action.value, 1)
    return newState
  }
  return state
}
