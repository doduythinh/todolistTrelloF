import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem,Button,Nav,Form,Toast,
    Dropdown, DropdownToggle ,Col,DropdownMenu,Container} from 'react-bootstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import './newsTrello.css';
import HorizontalScroll from 'react-scroll-horizontal';
// import { MDBContainer } from "mdbreact";

class NewsTrello extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            order:0,
            id:"",
        }
        this.adđToList = this.adđToList.bind(this);
        this.onChangeList = this.onChangeList.bind(this);
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
        let countListname = 0;
        if(this.props.listNews)
        {
            countListname = Object.keys(this.props.listNews).length;
        }
        await this.setState({order:countListname + 1})
        this.props.onAddNews(this.state.name,this.state.order)
    }
    //delete to list
    deleteToList =  (event, id) => {
        event.preventDefault()
         this.props.onDeleteNews(id);

    }
    changeListNews = (event,id) => {
        event.preventDefault()
            let countListname = 0;
            if(this.props.listNews)
            {
                countListname = Object.keys(this.props.listNews).length;
            }
            this.setState({order:countListname + 1,name:event.target.value})
        this.props.onUpdateNews(this.state.name,this.state.order,id);
    }
    componentDidMount() {
           this.props.ongetNews();
    }

    render() {
            let mapListName = () => {
                if(!this.props.listNews) return null;
                    return Object.keys(this.props.listNews).map((id) => {
                            return<Col key={id} xs={3}>
                                    <Toast>
                                        <Toast.Header onClick={(e) => this.deleteToList(e, id)}>
                                             <strong md={4}
                                                     className="mr-auto">Trello</strong>
                                        </Toast.Header>
                                        <input
                                            type="text"
                                            className="form-control"
                                            // onChange={(e)=>this.changeListNews(e,id)}
                                            onKeyPress={(e)=> {
                                                if (e.keyCode === "13") {
                                                   this.changeListNews();
                                                }
                                            }}
                                            // type="text" ref={(input)=> this.text = input}
                                                value={this.props.listNews[id].name}/>
                                    </Toast>
                                </Col>
                        }
                    )
            }
        return (
            <div className="wrapper">
                { mapListName()}
                    <Col  xs={3}>
                        <Toast >
                            <Form onSubmit={this.adđToList}>
                                <Toast.Body> <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={this.onChangeList}
                                /></Toast.Body>
                                <Button variant="success" onClick={this.adđToList}>Thêm danh sách</Button>
                            </Form>
                        </Toast>
                    </Col>
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
        onDeleteNews:(id)=>dispatch(actions.deleteNewsSite(id)),
        onUpdateNews:(name,order,id)=>dispatch(actions.updateNews(name,order,id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsTrello);