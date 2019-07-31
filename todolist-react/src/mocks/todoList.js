import Mock from 'mockjs'

Mock.mock('/todoList', {
  result: 'SUCCESS',
  data: {
    todolist: ['zhou', 'pipi']
  }
})
