import React, {Component} from "react";
import {
    DropdownItem, Button, Nav, Form, Toast,
    Dropdown, DropdownToggle, Col, DropdownMenu, Container, Navbar, NavItem,Row
} from 'react-bootstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import './NewsTrellos.scss';
import HorizontalScroll from 'react-scroll-horizontal';
import NewTrello from "./NewTrello/NewTrello";
class NewsTrellos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            order: 0,
            showMe: false,
            id:false,
            display: false,
            nameDetail: "",
            orderDetail:0,
        }
        this.addToStatus = this.addToStatus.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.editListStatus = this.editListStatus.bind(this);
    }
    //get take data
    onChangeStatus = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    // add to list
    addToStatus = async (event,prevState) => {
        event.preventDefault()
        let countListname = 0;
        if (this.props.listStatus) {
            countListname = Object.keys(this.props.listStatus).length;
        }
        await this.setState({order: countListname + 1})
        this.props.onAddNews(this.state.name, this.state.order)
    }
    //delete to list
    deleteToStatus = (id,event) => {
        event.preventDefault()
        this.props.onDeleteNews(id);
    }
    //change to list Status
    editListStatus = async (id,event) => {
        // console.log("12312312",event.key   == 'Enter')
        if(event.key == 'Enter' && event.target.value != '') {
            event.preventDefault()
            let countListname = 0;
            if (this.props.listStatus) {
                countListname = Object.keys(this.props.listStatus).length;
            }
            console.log("event.target.value", event.target.value)
            await this.setState({order: countListname + 1, name: event.target.value, id: false})
            this.props.onUpdateNews(this.state.name, this.state.order, id);
        }
    }
    //change state when click
    changeStateShow =  async (key,event) => {
        event.preventDefault()
        await this.setState({id: key})
    }
    componentDidMount(){
        //get data Status
        this.props.ongetNews();
    }
    componentWillUnmount() {
        //remove data Status
        this.props.ongetNews();
    }

    render() {
        // map data list Status
        let mapListName;
        !this.props.listStatus ? mapListName = null :
         mapListName =
            Object.keys(this.props.listStatus).map((key) => (
                <NewTrello
                    key={key}
                    id={key}
                    changeStatus={(e)=>this.editListStatus(key,e)}
                    stated={this.state.id}
                    deleted={(e)=>this.deleteToStatus(key,e)}
                    listStatus={this.props.listStatus[key].name}
                    clicked={(e)=>this.changeStateShow(key,e)}
                    changed={this.onChangeStatus}
                />
                )
            )
        return (
            <div className="wrapper">
                {mapListName}
                <Col xs={3} md={3} sm={3}>
                    <Toast>
                        <Form onSubmit={this.addToStatus}>
                            <Toast.Body> <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                onChange={this.onChangeStatus}
                            /></Toast.Body>
                            <Button variant="success" onClick={this.addToStatus}>Thêm danh sách</Button>
                        </Form>
                    </Toast>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("state to props ",state.main)
    return {
        listStatus: state.main.name,
        order: state.main.order,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddNews: (name, order) => dispatch(actions.AddSite(name, order)),
        ongetNews: () => dispatch(actions.getSite()),
        onDeleteNews: (id) => dispatch(actions.deleteNewsSite(id)),
        onUpdateNews: (name, order, id) => dispatch(actions.updateNews(name, order, id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsTrellos);