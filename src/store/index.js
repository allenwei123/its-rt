import { combineReducers, createStore } from 'redux'
import * as Test from './reduces/common'

const rootReducer = combineReducers({
    ...Test
  })

function configureStore(initialstate) {
    const store = createStore(rootReducer, initialstate)
    return store
  }

  export default configureStore()