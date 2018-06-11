import React, { Component } from 'react';
import Rout from './common/router'
import { Provider } from 'react-redux'
import store from './store/index'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <Provider store={store} className="App">
          <Rout />
      </Provider>
    );
  }
}

export default App;
