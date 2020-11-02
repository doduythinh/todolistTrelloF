import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { InputGroup} from 'react-bootstrap'
import  { FacebookLoginButton }  from 'react-social-login-buttons'
import  { GoogleLoginButton }  from 'react-social-login-buttons'
import  { GithubLoginButton }  from 'react-social-login-buttons'
import "./logins.css"
import {connect} from "react-redux";
import * as actions from '../../../store/actions/index';
import Spinner from "../../../component/UI/Spinner/Spinner";
import { Redirect } from 'react-router-dom';
import { InputLabel,Paper,Grid,Typography,FormControl,Button,Input,FormHelperText,
    FormControlLabel,Checkbox
} from '@material-ui/core'
import { withFormik } from 'formik'
import * as Yup from 'yup'

class Logins extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            email:"",
            password:"",
            login:false
        }
    }
    componentDidMount() {
        // console.log("authencation",this.props.authencation)
        // if(this.props.authencation !=="/main1")
        // {
        //     this.props.onRedirect();
        // }
    }
    submitLogin = (event) => {
        event.preventDefault()
        // if(this.props.isAuthencated)
        // {
        //     this.setState( { login: true } );
        // }
        // else {
        //     this.props.history.push('/main');
        // }
        this.props.onLogin(this.state.email,this.state.password)
    }
    // event take change
    onchangerhandle = (event) => {
        event.preventDefault()
        let emailvalue = this.textInputone.value;
        let passwordvalue = this.textInputtwo.value;
        // console.log("123",emailvalue,passwordvalue)
        this.setState({email:emailvalue,password:passwordvalue})
    }
    // render html in cappital
    render(){
        let value = null
        // console.log("12312312",this.props.isAuthencated)
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
            <div>
                {value}
                {loading}
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography supplied="headline" gutterBottom>
                            SignIn
                        </Typography>
                        {/*{console.log("erroremail",!!this.props.errors.email)}*/}
                        <FormControl fullWidth margin='normal' error={!!this.props.errors.email}>
                            <InputLabel>Email</InputLabel>
                            <Input
                                name='email' fullWidth
                                inputRef={(input) => this.textInputone = input}
                                defaultValue={this.props.values.email}
                                onChange={this.onchangerhandle}
                            />
                            {/*{console.log(this.props.values.email,this.props.errors.email)}*/}
                            <FormHelperText>{this.props.errors.email}</FormHelperText>
                        </FormControl>
                        {/*{console.log("errorpassword",!!this.props.errors.password)}*/}
                        <FormControl fullWidth margin='normal' error={!!this.props.errors.password}>
                            <InputLabel>Password</InputLabel>
                            <Input  fullWidth
                                    name='password'
                                   type='password'
                                    inputRef={(input) => this.textInputtwo = input}
                                   onChange={this.onchangerhandle}
                                    defaultValue={this.props.values.password}
                            />
                            {/*{console.log(this.props.values.password,this.props.errors.password)}*/}
                            <FormHelperText>{this.props.errors.password}</FormHelperText>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label='Receive new letter'
                        />
                        <FormControl  fullWidth margin='normal'>
                                <Button
                                    variant="contained"
                                    color='primary'
                                    type='submit'
                                    onClick={this.submitLogin}
                                >
                                    Signup
                                </Button>
                        </FormControl>
                        <FacebookLoginButton />
                        <GoogleLoginButton />
                        <GithubLoginButton />
                    </Paper>
                </Grid>
            </Grid>
            </div>
        )
    }
}
const FormikForm = withFormik({
    mapPropsToValues() { // Init form field
        return {
            email:'kyn12@gmail.com',
            password:'123456',
        }
    },
    validationSchema: Yup.object().shape({ // Validate form field
        email: Yup.string()
            .required('Username is required')
            .min(5, 'Username must have min 5 characters')
            .max(10, 'Username have max 10 characters'),
        password: Yup.number()
            .required('password is required')
            .min(5, 'Username must have min 5 characters')
            .max(10, 'Username have max 10 characters'),
    }),
})(Logins)
// state reducer redux
const mapStateToProps = state => {
    // console.log("pathmain",state.auth.pathmain)
    return{
        loading:state.auth.loading,
        isAuthencated:state.auth.token != null,
        authencation: state.auth.path
    }
}
// call api from action in redux saga
const mapDispatchToProps = dispatch => {
    return{
        onLogin: (email,pasword)=> dispatch(actions.auLoginTrue(email,pasword)),
        // onRedirect: ()=>dispatch(actions.reDirectPathSignIn("/main"))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FormikForm)