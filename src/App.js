import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import 'antd/dist/antd.css';

import Main from "./pages/main.tsx";
import Post from "./pages/post.tsx";
import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Main}/>
        <Route exact path="/post/:id" component={Post}/>
      </Router>
    </Provider>
  );
}

export default App;
