import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Button,Nav,Form,Toast, Container, Row ,Col,InputGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import './Sites.css';
// import { MDBContainer } from "mdbreact";

class Sites extends Component{
    constructor(props) {
        super(props);
        this.ischangeState = false
        this.state = {
            name:"",
            order:0,
        }
    }
    onchange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    clickToSite = (event) => {
        event.preventDefault();
        this.setState({order:this.state.order+1})
        this.props.onAddSite(this.state.name,this.state.order)
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevProps.ongetSite())
    //     if(this.props.ongetSite() !== prevProps.ongetSite())
    //     {
    //         this.ischangeState = true
    //     }
    // }
    componentWillUnmount() {
         this.ischangeState = false
    }

    async componentDidMount() {
        this.ischangeState = true
        this.props.ongetSite();
    }

    render() {
        // const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
        let mapdata = Object.keys(this.props.listName).map((key) => {
               return <Row>
                             <Col>
                                <Toast>
                                    <Toast.Header>
                                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                                        <strong className="mr-auto">Trello</strong>
                                    </Toast.Header>
                                    <p id={key.name}>{this.props.listName[key].name}</p>
                                    <Form onSubmit={this.clickToSite}>
                                        <Toast.Body> <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            onChange={this.onchange}
                                        /></Toast.Body>
                                    </Form>
                                    <Button variant="success" onClick={this.clickToSite}  >Thêm danh sách</Button>{' '}
                                </Toast>
                            </Col>
                        </Row>
            }
        )
        return (
            <div>
                {mapdata}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        site1: state.main.site1,
        listName:state.main.name,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddSite:(name,order)=>dispatch(actions.AddSite(name,order)),
        ongetSite:()=>dispatch(actions.getSite())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sites);