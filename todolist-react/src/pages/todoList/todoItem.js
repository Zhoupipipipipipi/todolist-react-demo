import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    this.props.del(this.props.index)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    const { content, test } = this.props
    return (
      <div>
        <li onClick={this.handleDelete}>
          {test}-{content}
        </li>
      </div>
    )
  }
}

TodoItem.propTypes = {
  // 传值属性
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // 必须是字符串或数字，必传
  del: PropTypes.func
}

TodoItem.defaultProps = {
  // 定义默认值
  test: 'hello world'
}
