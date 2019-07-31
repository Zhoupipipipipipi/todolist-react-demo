import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={el => {
            el.style.color = 'blue'
          }}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggole}>click</button> */}
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = 'blue'
                }}
                appear={true}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>click</button>
      </Fragment>
    )
  }
  handleToggole() {
    this.setState({
      show: !this.state.show
    })
  }
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App
