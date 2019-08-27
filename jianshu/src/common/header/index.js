import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = props => {
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
          <CSSTransition in={props.focused} timeout={200} classNames="slider">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFoucus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>

          <i className={props.focused ? 'focused iconfont' : 'iconfont '}>
            &#xe62b;
          </i>
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

const mapStateToProps = state => {
  // 获取store的数据，将store里面的数据映射到props里面
  return {
    focused: state.header.get('focused')
  }
}

const mapDispathToProps = dispatch => {
  // 改变store的数据
  return {
    handleInputFoucus() {
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
