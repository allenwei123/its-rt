import { handleActions } from 'redux-actions'
import navList from '@/mock/menuList'

const defaultState = { list:navList,
                      config:{} 
                    };

export const Asides = handleActions({
    'c Asides'(state, action) {
      // if(action.payload){
      //   const currentAside = menuList[action.payload]
      //   return { ...state, list: currentAside }
      // }else{
        return { ...state }
      // }
    },
    'Updated config'(state, action) {
      let arr = state.list; //导航菜单
      let newNavList;
      let config = action.payload;
      if(arr.length) {
        newNavList = arr.filter(item => {
          if( config[item.show]) {
            let b = item.children.filter(i => config[i.show] === 1);
            item.children = b;
            return true;
          }else {
            return false
          }
        })
      }
      return { ...state, config: action.payload, list: newNavList }
    }
  }, defaultState )