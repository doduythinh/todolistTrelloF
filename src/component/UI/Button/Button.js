import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const button =(props) => (
    <button  onClick={props.Clicked} >{props.children}</button>
)
export default button;