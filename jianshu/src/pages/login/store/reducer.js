import { fromJS } from 'immutable'
import { actionType } from './index'

const defaultState = fromJS({
  loginStatus: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LOGIN:
      return state.set('loginStatus', action.data)
    default:
      return state
  }
}
