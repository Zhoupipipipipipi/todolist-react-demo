import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	position: relative
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  border: none;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 14px;
  background: #eee;
  border-radius: 19px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slider-enter {
    transition: all 0.2s ease-out;
  }
  &.slider-enter-active {
    width: 240px;
  }
  &.slider-exit {
    transition: all 0.2s ease-out;
  }
  &.slider-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  margin-top: 9px;
  width: 250px;
  padding: 20px 20px 10px;
  left: 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`
export const SearchInfoTitle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: #969696;
`
export const SearchChange = styled.a`
  float: right;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  padding: 0;
`
export const SearchInfoContent = styled.div`
  font-size: 12px;
`
export const SearchInfoItem = styled.a`
  margin-right: 10px;
  display: inline-block;
  margin-bottom: 15px;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: solid 1px #ec6149;
  font-size: 14px;
  &.red {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
