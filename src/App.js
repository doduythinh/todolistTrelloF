import React from 'react';
import './App.scss';

import Main from './containers/MainTodoList/MainTodoList';
import SignIn from './containers/logins/SignUp/SignUp';
import Logins from './containers/logins/SignIn/logins';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect, useSelector} from 'react-redux';

const App = () => {

    let route = (
        <Switch>
            <Route path="/signup" component={SignIn}/>
            <Route path="/login" component={Logins}/>
            <Redirect to="/login"/>
        </Switch>
    )
    let isAuthenticated = useSelector(state => state.auth.token !== null)
    // console.log("app isAuthenticated",this.props.isAuthenticated)
    if (isAuthenticated) {
        route = (
            <Switch>
                <Route path="/main" component={Main}/>
                <Route path="/signup" component={SignIn}/>
                <Route path="/login" component={Logins}/>
                <Redirect to="/main"/>
            </Switch>
        )
    }
    return (
        <div className="App">
            {route}
        </div>
    );
}
export default withRouter(App);
