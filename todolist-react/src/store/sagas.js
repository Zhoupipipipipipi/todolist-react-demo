import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actiontypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action) // put用来提交数据
  } catch (error) {
    console.log(error)
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList) // takeEvery用来捕获store
}

export default mySaga
