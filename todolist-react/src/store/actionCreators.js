import { CHANGE_INPUT_VALIE, ADD_TODO_ITEM, DEL_ITEM } from './actiontypes'

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALIE,
  value
})

export const addTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const delItem = value => ({
  type: DEL_ITEM,
  value
})
