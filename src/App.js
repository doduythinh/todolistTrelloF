import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Main from './containers/MainTodoList/MainTodoList';
import SignIn from './containers/logins/SignUp/SignUp';
import Logins from './containers/logins/SignIn/logins';
import { Route, Switch, withRouter , Redirect } from 'react-router-dom'
import  { connect } from 'react-redux';
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
        // onTryAutoSignup: ()=>dispatch(actions.authCheckState())
    }
}
export default withRouter(connect(mapSateToProps,mapDispatchToProps)(App));
