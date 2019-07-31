import React, { Component } from 'react'
import TodoItem from './todoItem'
import { getInfo } from '../../api/todolist'
import { Input, Button } from 'antd'
import store from '../../store'

import {
  getInputChangeAction,
  addTodoItem,
  delItem
} from '../../store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: store.getState().inputValue,
      todoList: store.getState().todoList,
      add: this.add.bind(this),
      handleChange: this.handleChange.bind(this),
      handleDelete: this.handleDelete.bind(this)
    }
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange) // 监听store改变
  }
  componentDidMount() {
    // this.getInfo()
  }
  getInfo() {
    getInfo().then(result => {
      console.log(result)
      this.setState({
        todoList: [...result.data.todolist]
      })
    })
  }
  add() {
    const action = addTodoItem()
    store.dispatch(action)
  }
  handleChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }

  handleDelete(index) {
    const action = delItem(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div>
        <Input
          type="text"
          value={this.state.inputValue}
          onChange={this.state.handleChange}
        />
        <Button onClick={this.state.add}>add</Button>
        <ul>
          {this.state.todoList.map((item, index) => {
            return (
              <TodoItem
                key={index}
                index={index}
                content={item}
                del={this.state.handleDelete}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList
