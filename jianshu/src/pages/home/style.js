import styled from 'styled-components'

export const HomeBox = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const Homeleft = styled.div`
  width: 625px;
  float: left;
  margin-top: 15px;
  .home-banner {
    width: 100%;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  display: inline-block;
  line-height: 32px;
  height: 32px;
  border: solid #dcdcdc 1px;
  background: #f7f7f7;
  color: #000;
  padding-right: 10px;
  border-radius: 4px;
  font-size: 14px;
  overflow: hidden;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    width: 32px;
    height: 100%;
    margin-right: 10px;
    vertical-align: middle;
    float: left;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    margin: 0 0 30px;
    color: #333;
  }
  .text {
    color: #888;
    font-size: 12px;
    padding-right: 10px;
    line-height: 18px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: solid 1px #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  line-height: 2.5;
  border-radius: 18px;
  background: #bbb;
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`
export const ScrollTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: solid 1px #ccc;
  font-size: 14px;
  text-align: center;
  width: 50px;
  line-height: 50px;
  background: #fff;
  cursor: pointer;
`
