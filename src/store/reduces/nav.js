import { handleActions } from 'redux-actions'

const defaultState = { navData:[] };

export const Nav = handleActions({
    'c NavData'(state, action) {
        return { ...state,navData: action.payload }
    }
  }, defaultState )