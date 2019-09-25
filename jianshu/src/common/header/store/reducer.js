import { actionTypes } from './index'
import { fromJS } from 'immutable'

/* immutable库 immutable对象 为了避免返回不小心改变了别的属性的state*/
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的immutable对象
  switch (action.type) {
    case actionTypes.CHANGE_FOCUSED:
      return state.set('focused', action.value)
    case actionTypes.GET_SEARCH_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      }) // 同时修改多个属性
    case actionTypes.CHANGE_MOUSE:
      return state.set('mouseIn', action.bool)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
