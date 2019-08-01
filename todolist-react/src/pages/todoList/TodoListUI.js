import React, { Component } from 'react'
import TodoItem from './todoItem'
import { Input, Button } from 'antd'

export default class TodoListUI extends Component {
  render() {
    return (
      <div>
        <Input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleChange}
        />
        <Button onClick={this.props.add}>add</Button>
        <ul>
          {this.props.todoList.map((item, index) => {
            return (
              <TodoItem
                key={index}
                index={index}
                content={item}
                del={this.props.handleDelete}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
