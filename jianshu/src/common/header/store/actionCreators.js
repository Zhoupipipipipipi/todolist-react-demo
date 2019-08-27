import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

const getList = data => ({
  type: actionTypes.GET_SEARCH_LIST,
  data: fromJS(data)
})

export const changeFoucus = value => ({
  // focus状态改变
  type: actionTypes.CHANGE_FOCUSED,
  value
})

export const getSearchList = () => {
  // 获取热门搜索
  return dispatch => {
    axios
      .get('/api/searchList.json')
      .then(res => {
        dispatch(getList(res.data.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
