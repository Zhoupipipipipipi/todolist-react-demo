import React from 'react'
import TodoItem from './todoItem'
import { Input, Button } from 'antd'

const TodoListUI = props => {
  return (
    <div>
      <Input
        type="text"
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <Button onClick={props.add}>add</Button>
      <ul>
        {props.todoList.map((item, index) => {
          return (
            <TodoItem
              key={index}
              index={index}
              content={item}
              del={props.handleDelete}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoListUI
