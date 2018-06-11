import { handleActions } from 'redux-actions'
const defaultState = { 
  name: '初始化name',
  token: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')).token : null , 
  uid: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')).id : null ,
};

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
}, defaultState)