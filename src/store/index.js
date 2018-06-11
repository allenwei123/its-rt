import { combineReducers, createStore } from 'redux'
import * as Test from './reduces/common'
import * as Asides from './reduces/aside'
import * as Nav from './reduces/nav'

const rootReducer = combineReducers({
    ...Test,
    ...Nav,
    ...Asides
  })

function configureStore(initialstate) {
    const store = createStore(rootReducer, initialstate)
    return store
  }

  export default configureStore()