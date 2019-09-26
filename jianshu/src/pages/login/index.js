import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginBox, Input, Button } from './style'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginBox>
          <Input ref={input => (this.user = input)}></Input>
          <Input type="password" ref={input => (this.password = input)}></Input>
          <Button
            onClick={() => {
              this.props.login(this.user, this.password)
            }}
          >
            login
          </Button>
        </LoginBox>
      )
    } else {
      return <Redirect to="/"></Redirect>
    }
  }
}

const mapState = state => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatch = dispatch => {
  return {
    login(user, password) {
      dispatch(actionCreator.changeLogin(user.value, password.value))
    }
  }
}
export default connect(
  mapState,
  mapDispatch
)(Login)
