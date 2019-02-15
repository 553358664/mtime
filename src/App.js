import React, { Component } from 'react';
import { Provider } from "react-redux"
import {HashRouter as Router , Route  , Redirect , Switch} from "react-router-dom"
import Home from "./components/home"
import Buy from "./components/buy"
import Mall from "./components/mall"
import Find from "./components/find"
import Footer from "./components/footer"
import store from "./store"
import "./common/css/iconfont/iconfont.css"
import "./common/css/reset.css"
import "./common/js/flexble"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/home" Component={Home}/>
              <Route path="/buy" Component={Buy}/>
              <Route path="/mall" Component={Mall}/>
              <Route path="/find" Component={Find}/>
              <Redirect path="/" to="/home"/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
