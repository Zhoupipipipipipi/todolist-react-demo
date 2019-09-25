import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      changePage
    } = this.props
    if (focused || mouseIn) {
      const pageList = []
      const jsList = list.toJS() // list 是immutable对象，因此需要用toJS转换为普通对象
      if (jsList.length) {
        for (let index = (page - 1) * 10; index < page * 10; index++) {
          pageList.push(
            <SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>
          )
        }
      }
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchChange
              onClick={() => {
                changePage(page, totalPage, this.spinIcon)
              }}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon
                }}
                className={'iconfont spin'}
              >
                &#xe851;
              </i>
              换一批
            </SearchChange>
          </SearchInfoTitle>
          <SearchInfoContent>{pageList}</SearchInfoContent>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFoucus, handleInputBlur, list } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
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
                onFocus={() => handleInputFoucus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
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
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathToProps = dispatch => {
  // 改变store的数据
  return {
    handleInputFoucus(list) {
      list.size === 0 && dispatch(actionCreators.getSearchList(true))
      dispatch(actionCreators.changeFoucus(true))
    },
    handleInputBlur() {
      dispatch(actionCreators.changeFoucus(false))
    },
    handleMouseEnter() {
      dispatch(actionCreators.changeMouse(true))
    },
    handleMouseLeave() {
      dispatch(actionCreators.changeMouse(false))
    },
    changePage(page, totalPage, icon) {
      let deg = icon.style.transform
      if (deg) {
        deg = parseInt(deg.replace(/[^0-9]/gi, ''))
      } else {
        deg = 0
      }
      icon.style.transform = 'rotate(' + (deg + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(
  // 建立连接
  mapStateToProps,
  mapDispathToProps
)(Header)
