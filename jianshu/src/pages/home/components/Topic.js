import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicItem, TopicWrapper } from '../style'

class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem key={item.id}>
              <img className="topic-pic" src={item.url} alt="" />
              {item.tip}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}
const mapState = state => {
  return {
    topicList: state.getIn(['home', 'topicList']).toJS()
  }
}

export default connect(
  mapState,
  null
)(Topic)
