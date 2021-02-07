import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar, Button, Nav, Form,
    FormControl, ListGroup, Col, Row, Container, NavItem
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {VscAdd, VscBell,} from "react-icons/vsc";
import {RiCommunityLine} from "react-icons/ri";
import {BsTable} from "react-icons/bs";
import {GrCircleInformation} from "react-icons/gr";
import {BiUserCircle} from "react-icons/bi";
import {IoMdApps} from "react-icons/io";
import Background from '../../component/BackgroundTodoList/BackgroundTodoList';

const MainTodoList = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Form inline>
                        <Button variant="secondary" className="mr-sm-2" ><IoMdApps/></Button>
                        <Button variant="secondary" className="mr-sm-2"><RiCommunityLine/></Button>
                        <Button variant="secondary" className="mr-sm-2" sm="1"><BsTable/> Bảng</Button>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    </Form>
                </Nav>
                <Form inline>
                    <Button variant="secondary" className="mr-sm-2"><VscAdd/></Button>
                    <Button variant="secondary" className="mr-sm-2"><VscBell/></Button>
                    <Button variant="secondary" className="mr-sm-2"><GrCircleInformation/></Button>
                    <Button variant="secondary" className="mr-sm-2"><BiUserCircle/></Button>
                </Form>
            </Navbar>
            <Background/>
        </>
    )
}
export default MainTodoList;
