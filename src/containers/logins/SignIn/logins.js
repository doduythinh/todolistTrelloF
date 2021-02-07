import React, {Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  { FacebookLoginButton }  from 'react-social-login-buttons'
import  { GoogleLoginButton }  from 'react-social-login-buttons'
import  { GithubLoginButton }  from 'react-social-login-buttons'
import "./logins.scss"
import {connect, useDispatch, useSelector} from "react-redux";
import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { InputLabel,Paper,Grid,Typography,FormControl,Button,Input,FormHelperText,
    FormControlLabel,Checkbox
} from '@material-ui/core'
import { withFormik } from 'formik'
import * as Yup from 'yup'

const Logins = () => {

    let [values,setValues] = useState({
        email:"",
        password:""
    });
    let dispatch = useDispatch();
    const  submitLogin = (event) => {
        event.preventDefault()
        let action = actions.auLoginTrue(values.email,values.password)
        dispatch(action)
    }
    // event take change
    const onchangerhandle = async (event) => {
        event.preventDefault()
        let value = event.target.value;
        console.log("valuesemail",values.email,"valuesemailpassword",values.password)
        await setValues({...values,[event.target.name]:value})

    }
    let isAuthencated = useSelector(state=>state.auth.token != null)
    let stateLoading = useSelector(state=>state.auth.loading)
    let authenticated = useSelector(state=>state.auth.path)
        let value = null
        // console.log("12312312",this.props.isAuthencated)
        if(isAuthencated)
        {
            value = <Redirect to={authenticated} />
        }
        return (
            <div className="grid--backgroundImage">
                {value}
            <Grid container  spacing={1} justify='center' alignContent='center' >
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography supplied="headline" gutterBottom>
                            SignIn
                        </Typography>
                        <FormControl fullWidth margin='normal'
                                     //error={!!this.errors.email}
                            >
                            <InputLabel>Email</InputLabel>
                            <Input
                                name='email' fullWidth
                                type="text"
                                //inputRef={(input) => this.textInputone = input}
                                //defaultValue={this.props.values.email}
                                onChange={(e)=>onchangerhandle(e)}
                            />
                            {/*<FormHelperText>{this.props.errors.email}</FormHelperText>*/}
                        </FormControl>
                        {/*{console.log("errorpassword",!!this.props.errors.password)}*/}
                        <FormControl fullWidth margin='normal'
                                     //error={!!this.errors.password}
                        >
                            <InputLabel>Password</InputLabel>
                            <Input  fullWidth
                                    name='password'
                                   type='password'
                                    // inputRef={(input) => this.textInputtwo = input}
                                   onChange={(e)=>onchangerhandle(e)}

                                    //defaultValue={this.props.values.password}
                            />
                            {/*<FormHelperText>{this.props.errors.password}</FormHelperText>*/}
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
                                    onClick={(event)=>submitLogin(event)}
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
export default Logins;
