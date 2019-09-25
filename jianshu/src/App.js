import React from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import { GlobalStyle } from './statics/iconfont/iconfont.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
