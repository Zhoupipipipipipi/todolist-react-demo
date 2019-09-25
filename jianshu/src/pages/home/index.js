import React, { Component } from 'react'
import { HomeBox, Homeleft, HomeRight, ScrollTop } from './style'
import { actionCreator } from './store'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

class Home extends Component {
  toTop() {
    window.scrollTo(0, 0)
  }

  handleScroll() {
    document.addEventListener('scroll', this.props.handleScroll)
  }

  render() {
    const { scrollType } = this.props
    return (
      <HomeBox>
        <Homeleft>
          <img
            className="home-banner"
            src="https://preview.qiantucdn.com/58pic/19/18/34/73T58PIChFKrmPTzC254a_PIC2018.jpg!w1024_new_small"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </Homeleft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {scrollType ? <ScrollTop onClick={this.toTop}>顶部</ScrollTop> : null}
      </HomeBox>
    )
  }
  componentDidMount() {
    const { getIndexInfo } = this.props
    getIndexInfo()
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleScroll)
  }
}

const mapState = state => {
  return {
    scrollType: state.getIn(['home', 'scrollType'])
  }
}

const mapDispatch = dispatch => {
  return {
    getIndexInfo() {
      dispatch(actionCreator.getIndexInfo())
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 0) {
        dispatch(actionCreator.changeScrollType(true))
      } else {
        dispatch(actionCreator.changeScrollType(false))
      }
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Home)
