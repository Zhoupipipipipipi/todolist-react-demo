import axios from 'axios'
import { actionType } from './index'

export const login = data => ({
  type: actionType.CHANGE_LOGIN,
  data
})

export const logout = () => ({
  type: actionType.CHANGE_LOGIN,
  data: false
})

export const changeLogin = (user, password) => {
  return dispatch => {
    axios.get('/api/login.json', { params: { user, password } }).then(resp => {
      dispatch(login(resp.data))
    })
  }
}
