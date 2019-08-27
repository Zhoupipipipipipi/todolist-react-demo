import { actionTypes } from './index'
import { fromJS } from 'immutable'

/* immutable库 immutable对象 为了避免返回不小心改变了别的属性的state*/
const defaultState = fromJS({
  focused: false,
  list: []
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的immutable对象
  switch (action.type) {
    case actionTypes.CHANGE_FOCUSED:
      return state.set('focused', action.value)
    case actionTypes.GET_SEARCH_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}
