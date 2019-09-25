import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListInfo, ListItem, LoadMore } from '../style'
import { actionCreator } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
  render() {
    const { list, getMoreList, pageIndex } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <Link key={index} to="/detail">
            <ListItem>
              <ListInfo>
                <h3 className="title">{item.title}</h3>
                <p className="text">{item.text}</p>
              </ListInfo>
              <img className="pic" src={item.url} alt="" />
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() => getMoreList(pageIndex)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.getIn(['home', 'articleList']).toJS(),
    pageIndex: state.getIn(['home', 'pageIndex'])
  }
}

const mapDispatch = dispatch => {
  return {
    getMoreList(pageIndex) {
      dispatch(actionCreator.getMoreList(pageIndex))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(List)
