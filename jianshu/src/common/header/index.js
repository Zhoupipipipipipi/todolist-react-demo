import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchChange,
  SearchInfoContent,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  getSearchInfo() {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchChange>换一批</SearchChange>
          </SearchInfoTitle>
          <SearchInfoContent>
            {list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
          </SearchInfoContent>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFoucus, handleInputBlur } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slider">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFoucus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont '}>
              &#xe62b;
            </i>
            {this.getSearchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  // 获取store的数据，将store里面的数据映射到props里面
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = dispatch => {
  // 改变store的数据
  return {
    handleInputFoucus() {
      dispatch(actionCreators.getSearchList(true))
      dispatch(actionCreators.changeFoucus(true))
    },
    handleInputBlur() {
      dispatch(actionCreators.changeFoucus(false))
    }
  }
}

export default connect(
  // 建立连接
  mapStateToProps,
  mapDispathToProps
)(Header)
