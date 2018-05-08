import { handleActions } from 'redux-actions'
const defaultState = { name: '初始化name', token: null ,uid: null };

export const Test = handleActions({
    'Base'(state, action) {
      return { ...state, name: action.payload }
    },
    'Change Token'(state, action) {
      return { ...state, token: action.payload }
    },
    'Change uid'(state, action) {
      return { ...state, uid: action.payload }
    }
  }, defaultState )