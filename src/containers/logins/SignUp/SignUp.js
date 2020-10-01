import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Button,
    FormControl,ListGroup,FormGroup,Form,Input } from 'react-bootstrap';
import signUp from './SignUp.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import  { Redirect } from  'react-router-dom';
import  Spinner  from '../../../component/UI/Spinner/Spinner';


const initialState = {
    emailError: "",
    passwordError: "",
    againspasswordError: "",
}
class  SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            againspassword:"",
        }
    }
    onchangeSignUp = (event) => {
        let emailValue  = this.inputone.value;
        let passwordValue  = this.inputtwo.value;
        let passwordtwovalue = this.inputthree.value;
        console.log(emailValue,passwordValue,passwordtwovalue)
        this.setState({email:emailValue,password:passwordValue,againspassword:passwordtwovalue})
    }
    vaidation = () => {
        let mailError = "";
        let passwordError = "";
        let publicm = "";
        console.log("123456",this.state.email.includes('@gmail.com'))
        if(!this.state.email.includes('@gmail.com') && !'')
        {
            mailError = "invalid email";
        }
        console.log("465798",this.state.passwordError !== this.state.againspasswordError)
        if(this.state.passwordError == this.state.againspasswordError && ! '')
        {
            publicm = 'charactor right = ';
        }
        console.log("46579811",this.state.passwordError >=6)
        if(this.state.passwordError >=6 && !'')
        {
            passwordError = "password 6 charactor"
        }
        if(mailError || passwordError || publicm)
        {
            this.setState({ emailError: mailError,passwordError:passwordError,againspasswordError:publicm });
            return false;
        }
        return true;
    }
    onSubmitSignUp = (event) => {
        event.preventDefault();
        const isValid = this.vaidation();
        if(isValid){
            console.log(this.state)
            this.setState(initialState);
        }
        this.props.onSignUp(this.state.email,this.state.password)
    }
    componentDidMount() {
        if(this.props.Authencated)
        {
            this.props.onRedirect();
        }
    }

    render() {
        let authen = null;
        if(this.props.Authencated)
        {
            authen = <Redirect to={this.props.authencation}  />
        }
        let loading = null;
        if(!this.props.loading)
        {
            loading = <Spinner />
        }
        return(
            <Form className="SignUp" onSubmit={this.onSubmitSignUp}>
                {authen}
                {loading}
                <h1>
                    <span className="font-weight-bold">Sign UP</span>
                </h1>
                <FormGroup>
                    <label>Email</label>
                    <FormControl
                        ref={(input)=>this.inputone=input}
                        type="email" placeholder="Email"
                        onChange={this.onchangeSignUp}
                    />
                    <div style={{ fonSize: 12,color: "red"}} >{this.state.emailError}</div>
                    <label>Password</label>
                    <FormControl
                        ref={(input)=>this.inputtwo=input}
                        className="mt-3 mb-3"
                        type="password" placeholder="Password"
                        onChange={this.onchangeSignUp}
                    />
                    <div style={{ fonSize: 12,color: "red"}} >{this.state.passwordError}</div>
                    <label>Again Password</label>
                    <FormControl type="password" placeholder="access Password"
                                 ref={(input)=>this.inputthree=input}
                    />
                    <div style={{ fonSize: 12,color: "red"}} >{this.state.againspasswordError}</div>
                </FormGroup>
                <Button className="btn-lg btn-secondary btn-lock"
                        onClick={this.onSubmitSignUp}
                >
                    Sign Up
                </Button>
            </Form>
        )
    }
}
const mapStateToProp = state =>{
    return{
        token:state.auth.token,
        userId:state.auth.token,
        Authencated: state.auth.token !== null,
        loading:state.auth.loadingSignUp,
        authencation:state.auth.path

    }
}
const mapDistpatchToProps = dispatch => {
    return{
        onSignUp: (email,password)=>dispatch(actions.signUp(email,password)),
        onRedirect: ()=>dispatch(actions.reDirectPathSignUp("/login"))
    }
}
export default connect(mapStateToProp,mapDistpatchToProps)(SignUp);