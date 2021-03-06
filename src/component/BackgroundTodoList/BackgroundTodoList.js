import React, {Component} from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, Nav, Form, Toast, Container, Row, Col, InputGroup} from 'react-bootstrap';
import {BiUserCircle,} from "react-icons/bi";
import {FcCalendar} from "react-icons/fc";
import {GrClearOption} from "react-icons/gr";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {TiLockClosedOutline} from "react-icons/ti";
import {BsFillStarFill} from "react-icons/bs";
import NewsTrellos from "../SitesTodoList/NewsTrellos";

const backgroundTodoList = () => {
    return (
        <div className="bg">
            <Navbar bg="light">
                <Navbar.Brand href="#home">Helllo Chào Mừng đến với mình</Navbar.Brand>
            </Navbar>
            <Navbar bg="black" variant="gray">
                <Nav className="mr-auto">
                    <Form inline>
                        <Button variant="secondary" className="mr-sm-2">ReactJS</Button>
                        <Button variant="secondary" className="mr-sm-2"><BsFillStarFill/></Button>
                        <Button variant="secondary" className="mr-sm-2">Cá Nhân</Button>
                        <Button variant="secondary" className="mr-sm-2"><TiLockClosedOutline/>Riêng Tư</Button>
                        <Button variant="secondary" className="mr-sm-2"><BiUserCircle/>DDT</Button>
                        <Button variant="secondary" className="mr-sm-2">Mời</Button>
                    </Form>
                </Nav>
                <Nav>
                    <Form inline>
                        <Button variant="secondary" className="mr-sm-2"><FcCalendar/> Lịch</Button>
                        <Button variant="secondary" className="mr-sm-2"><GrClearOption/>Butler</Button>
                        <Button variant="secondary" className="mr-sm-2"><BiDotsHorizontalRounded/> Hiện Menu</Button>
                    </Form>
                </Nav>
            </Navbar>
            <NewsTrellos />
        </div>
    );
}
export default backgroundTodoList;
