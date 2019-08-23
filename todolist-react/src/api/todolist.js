import request from '../utils/request'
import '../mocks/todoList'

export function getInfo(params) {
  return request({
    url: '/todoList',
    method: 'get'
  })
}
