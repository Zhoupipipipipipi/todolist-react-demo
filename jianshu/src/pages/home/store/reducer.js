import { fromJS } from 'immutable'
import { actionType } from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  pageIndex: 1,
  scrollType: false // 默认不显示
})

const get_index_info = (state, action) => {
  const data = action.data.data
  return state.merge({
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList)
  })
}

const get_more_list = (state, action) => {
  const list = action.data.data.list
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(list)),
    pageIndex: fromJS(action.pageIndex + 1)
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_INDEX_INFO:
      return get_index_info(state, action)
    case actionType.GET_MORE_LIST:
      return get_more_list(state, action)
    case actionType.CHANGE_SCROLL_TYPE:
      return state.set('scrollType', action.show)
    /* return state.merge({
        topicList: fromJS(data.topicList),
        articleList: fromJS(data.articleList)
      }) */
    default:
      return state
  }
}
