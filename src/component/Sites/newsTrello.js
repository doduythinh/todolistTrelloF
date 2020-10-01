import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Button,Nav,Form,Toast, Container, Row ,Col,InputGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import './newsTrello.css';
// import { MDBContainer } from "mdbreact";

class NewsTrello extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            order:0,
            id:""
        }
    }

    //get take data
    onChangeList = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    // add to list
    adđToList = async (event) => {
        event.preventDefault()
        let countListname;
        if(!this.props.listName)
        {
            countListname = 0
        }
        else {
            countListname = Object.keys(this.props.listNews).length;
        }
        await this.setState({order:countListname + 1})
        this.props.onAddNews(this.state.name,this.state.order)
    }

    // delete to list
    deleteToList = (event) =>{
        event.preventDefault()
        let id = Object.keys(this.props.listNews.id)
        console.log(id)
        this.props.onDeleteNews(this.state.order,this.state.name);
    }

    componentDidMount() {
           this.props.ongetNews();
    }

    render() {
            let mapListName = () => {
                if(!this.props.listNews) return null;
                    return Object.keys(this.props.listNews).map((id) => {
                            return <Row className="item">
                                <Col>
                                    <Toast >
                                        <Toast.Header onClick={this.deleteToList}>
                                            <strong className="mr-auto">Trello</strong>
                                        </Toast.Header>
                                        <p key={id}>{this.props.listNews[id].name}</p>
                                    </Toast>
                                </Col>
                            </Row>
                        }
                    )
            }
        return (
            <div className="wrapper">
                {mapListName()}
                <Row>
                    <Col>
                        <Toast>
                            <Form onSubmit={this.adđToList}>
                                <Toast.Body> <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={this.onChangeList}
                                /></Toast.Body>
                                <Button variant="success" onClick={this.adđToList}  >Thêm danh sách</Button>{' '}
                            </Form>
                        </Toast>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        site1: state.main.site1,
        listNews:state.main.name,
        order:state.main.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNews:(name,order)=>dispatch(actions.AddSite(name,order)),
        ongetNews:()=>dispatch(actions.getSite()),
        onDeleteNews:(order,name)=>dispatch(actions.deleteNewsSite(name,order))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsTrello);