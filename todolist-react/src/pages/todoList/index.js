import React, { Component } from 'react'
import TodoItem from './todoItem'
import { getInfo } from '../../api/todolist'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      todoList: [],
      add: this.add.bind(this),
      handleChange: this.handleChange.bind(this),
      handleDelete: this.handleDelete.bind(this)
    }
  }
  componentWillMount() {
    this.getInfo()
  }
  getInfo() {
    getInfo().then(result => {
      console.log(result)
      this.setState({
        todoList: result.data.todolist
      })
    })
  }
  add() {
    const todoList = [...this.state.todoList, this.state.inputValue]
    this.setState({
      todoList,
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete(index) {
    const list = [...this.state.todoList]
    list.splice(index, 1)
    this.setState({
      todoList: list
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.state.handleChange}/>
        <button onClick={this.state.add}>add</button>
        <ul>
          {
            this.state.todoList.map((item, index) => {
              return <TodoItem key={index} index={index} content={item} del={this.state.handleDelete} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList