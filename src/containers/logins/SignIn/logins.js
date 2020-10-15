import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Button,
    FormControl,ListGroup,FormGroup,Form,Input } from 'react-bootstrap';
import  { FacebookLoginButton }  from 'react-social-login-buttons';
import  { GoogleLoginButton }  from 'react-social-login-buttons';
import  { GithubLoginButton }  from 'react-social-login-buttons';
import "./logins.css";
import {connect} from "react-redux";
import * as actions from '../../../store/actions/index';
import Spinner from "../../../component/UI/Spinner/Spinner";
import { Redirect } from 'react-router-dom';
class Logins extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            email:"",
            password:""
        }
    }
    componentDidMount() {
        console.log(123456,this.props.authencation)
        if(!this.props.authencation !=="/main")
        {
            this.props.onRedirect();
        }
    }
    // submit call api
    submitLogin = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state.email,this.state.password)
    }
    // event take change
    onchangerander = (event) => {
        let emailvalue = this.textInputone.value;
        let passwordvalue = this.textInputtwo.value;
        console.log("123",emailvalue,passwordvalue)
        this.setState({email:emailvalue,password:passwordvalue})
    }
    // render html in cappital
    render(){
        let value = null
        console.log("12312312",this.props.isAuthencated)
        if(this.props.isAuthencated)
        {
            value = <Redirect to={this.props.authencation} />
        }
        let loading = null ;
        if(this.props.loading)
        {
            loading = <Spinner />
        }
        return (
           <Form className="login-form">
               {value}
               {loading}
               <h1>
                   <span className="font-weight-bold">Trello Fake</span>.com
               </h1>
               <h2 className="text-center">Welcome</h2>
               <FormGroup>
                   <label>Email</label>
                   <FormControl
                       ref={(input) => this.textInputone = input}
                       type="email" placeholder="Email" onChange={this.onchangerander} />
               </FormGroup>
               <FormGroup>
                   <label>Password</label>
                   <FormControl
                       ref={(input) => this.textInputtwo = input}
                       type="password" placeholder="Password" onChange={this.onchangerander} />
               </FormGroup>
               <button
                   className="btn-lg btn-dark btn-lock"
                   onClick={this.submitLogin}>
                   Login</button>
               <div className="text-center pt-3">
                   Or continue with your social account
               </div>
               <FacebookLoginButton className="mt-3 mb-3" />
               <GoogleLoginButton className="mt-3 mb-3" />
               <GithubLoginButton className="mt-3 mb-3"  />
               <div className="text-center">
                   <a href="/sign-up">Sign up</a>
                   <span className="p-2"></span>
                   <a href="/sign-up">Forgot - Passwword</a>
               </div>
           </Form>
        )
    }
}
// state reducer redux
const mapStateToProps = state => {
    console.log("121", state.auth.token)
    console.log("12345",)
    return{
        loading:state.auth.loading,
        token:state.auth.token,
        userId:state.auth.userId,
        isAuthencated:state.auth.token != null,
        authencation: state.auth.pathmain
    }
}
// call api from action in redux saga
const mapDispatchToProps = dispatch => {
    return{
        onLogin: (email,pasword)=> dispatch(actions.auLoginTrue(email,pasword)),
        onRedirect: ()=>dispatch(actions.reDirectPathSignIn("/main"))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Logins)