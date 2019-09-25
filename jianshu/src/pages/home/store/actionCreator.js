import axios from 'axios'
import { actionType } from './index'

export const getList = data => ({
  type: actionType.GET_INDEX_INFO,
  data
})

export const getMore = (data, pageIndex) => ({
  type: actionType.GET_MORE_LIST,
  data,
  pageIndex
})

export const getIndexInfo = () => {
  // 获取首页列表
  return dispatch => {
    axios.get('/api/index.json').then(res => {
      dispatch(getList(res.data))
    })
  }
}

export const getMoreList = pageIndex => {
  // 获取更多文字
  return dispatch => {
    axios.get('/api/more.json', { params: { page: pageIndex } }).then(resp => {
      dispatch(getMore(resp.data, pageIndex))
    })
  }
}

export const changeScrollType = show => ({
  type: actionType.CHANGE_SCROLL_TYPE,
  show
})
