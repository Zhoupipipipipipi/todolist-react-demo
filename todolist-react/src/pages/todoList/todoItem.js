import React, { Component } from 'react'

export default class todoItem extends Component {
  handleDelete() {
    this.props.del(this.props.index)
  }
  render() {
    return (
      <div>
        <li onClick={this.handleDelete.bind(this)}>{this.props.content}</li>
      </div>
    )
  }
}
