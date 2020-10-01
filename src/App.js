import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/main';
import SignIn from './containers/logins/SignUp/SignUp';
import Logins from './containers/logins/SignIn/logins';
import { Route, Switch, withRouter , BrowserRouter } from 'react-router-dom'
import  { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncMain = asyncComponent(()=>{
    return import('./containers/Main/main');
})
class App extends Component {
    componentDidMount() {
        this.props.onRedirect();
    }

    render(){
        let route = (
            <Switch>
              <Route path="/main" component={Main} />
              <Route path="/signup" component={SignIn} />
              <Route exact path="/login" component={Logins} />
            </Switch>
      )
        if(!this.props.isAuthenticated)
        {
            route = (
                    <Switch>
                        <Route path="/main" component={Main} />
                        <Route path="/signup" component={SignIn} />
                        <Route exact path="/login" component={Logins} />
                    </Switch>
            )
        }
        return (
          <div className="App">
              {route}
          </div>
        );
      }
}
const mapSateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRedirect: ()=>dispatch(actions.authCheckState())
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(App);
