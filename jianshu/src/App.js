import React from 'react'
import Header from './common/header'
import { Provider } from 'react-redux'
import { GlobalStyle } from './statics/iconfont/iconfont.js'
import store from './store'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  )
}

export default App
