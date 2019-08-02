import {
  CHANGE_INPUT_VALIE,
  ADD_TODO_ITEM,
  DEL_ITEM,
  INIT_LIST_ACTION
} from './actiontypes'
import axios from 'axios'

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

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return dispatch => {
    axios.get('/list.json').then(res => {
      const action = initListAction(res.data)
      dispatch(action)
    })
  }
}
