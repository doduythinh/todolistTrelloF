import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/main';
import SignIn from './containers/logins/SignUp/SignUp';
import Logins from './containers/logins/SignIn/logins';
import { Route, Switch, withRouter , Redirect } from 'react-router-dom'
import  { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncMain = asyncComponent(()=>{
    return import('./containers/Main/main');
})
// const asyncLogin = asyncComponent(()=>{
//     return import('./containers/Main/main');
// })
// console.log("123456",asyncMain)
class App extends Component {
    componentDidMount() {
        // this.props.onTryAutoSignup();
    }

    render(){
        let route = (
            <Switch>
              <Route path="/signup" component={SignIn} />
              <Route path="/login" component={Logins} />
              <Redirect to="/login" />
            </Switch>
      )
        // console.log("app isAuthenticated",this.props.isAuthenticated)
        if(this.props.isAuthenticated)
            {
                route = (
                    <Switch>
                            <Route path="/main" component={Main} />
                            <Route path="/signup" component={SignIn} />
                            <Route path="/login" component={Logins} />
                            <Redirect to="/main" />
                    </Switch>
                )
            }
        return (
          <div className="App">
              {route}
              {/*{console.log("route",route)}*/}
          </div>
        );
      }
}
const mapSateToProps = state => {
    // console.log("123123 state.auth.token",state.auth.token)
    return {
        isAuthenticated: state.auth.token !== null,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // onTryAutoSignup: ()=>dispatch(actions.authCheckState())
    }
}
export default withRouter(connect(mapSateToProps,mapDispatchToProps)(App));
