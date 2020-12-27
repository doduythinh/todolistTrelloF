import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Toast,Form,Button,Modal} from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import "../NewsTrellos.scss";
import {connect,useDispatch,useSelector} from "react-redux";
import * as actions from "../../../store/actions";
const NewTrello  = (props,id) =>
{
    const listStatusDetail = useSelector(state=>state.main.listStatusByid);
    const listStatusJustOne = useSelector(state=>state.main.nameDetailJustOnePopUp);
    // console.log("listStatusDetail",listStatusDetail,"listStatusJustOne",listStatusJustOne)
    const [show, setShow] = useState(false);
    const INITIAL_STATE = {
        nameDetail: "",
        orderDetail: 1,
        id:""
    }
    const [state,setState] = useState(INITIAL_STATE);
    let dispatch = useDispatch();
    useEffect(()=>{
        let action = actions.getListDetailNews(id);
        dispatch(action);
    },[])

    const changedDetailStatus = (event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setState({...state,nameDetail:event.target.value});
    }

    const addDetailStatus = (event,id) =>{
        event.preventDefault()
        id = props.id
        // console.log("123456",props.listStatusDetail)
        let count = 0;
        if(props.listStatusDetail)
        {
            count = Object.keys(props.listStatusDetail).length;
        }
        console.log("count",count);
        setState({...state,orderDetail:count+1});
        let action = actions.addNewsDetail(state.nameDetail,state.orderDetail,id);
        dispatch(action);
    }

    const popUpTrue = (event,key)  => {
        // alert(key);
        setShow(true)
        setState({...state,id:key})
        let action = actions.getListDetailNewsById(key);
        dispatch(action);
    }

    function popUpFalse(key) {
        setShow(false)
    }
    return (
        <Col xs={3} key={id}>
                <Toast>
                    <Toast>
                        <strong  onClick={props.clicked}
                                 className="mr-auto strong">{props.listStatus}
                        </strong>
                        <AiOutlineClose className="daux" size={20}  onClick={props.deleted}/>
                        {props.stated === id ? <div onKeyUp={props.changeStatus}><input
                            // ref="inputTarget"
                            type="text"
                            className="form-control texarea"
                            defaultValue={props.listStatus}
                            onChange={props.changed}
                        /></div> : <div></div>}
                    </Toast>
                    <Toast.Body>
                        <>
                            {
                                listStatusDetail ? Object.keys(listStatusDetail).map(key=> {
                                // console.log("keykeykeykey", key);
                                //     console.log("listStatusDetail",listStatusDetail[key].idNews)
                                return props.id === listStatusDetail[key].idNews ?
                                <input
                                        className="form-control" key={key}
                                        defaultValue={listStatusDetail[key].nameNews}
                                        onChange={props.changedDetail}
                                        onClick={(event) => popUpTrue(event,key)}
                                    /> : ''
                            }) : ''}
                            <Form onSubmit={(e,id)=>addDetailStatus(e,id)}>
                                <input className="form-control" onChange={changedDetailStatus} />
                            </Form>
                            <Modal xs={12}
                                show={show}
                                onHide={() => popUpFalse()}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        {
                                            listStatusJustOne ? listStatusJustOne.nameNews : null
                                        }
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                        ipsam atque a dolores quisquam quisquam adipisci possimus
                                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                        deleniti rem!
                                    </p>
                                </Modal.Body>
                            </Modal>
                        </>
                    </Toast.Body>

                </Toast>
            </Col>
    )
}

// const mapStateToProps = state =>{
//     console.log("mainDetailStatus",state.main.listStatusByid)
//     return {
//         listStatusDetail: state.main.listStatusByid,
//         listStatusJustOne:state.main.nameDetailJustOnePopUp
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddNewDetail:(nameDetail,orderDetail,id) => dispatch(actions.addNewsDetail(nameDetail,orderDetail,id)),
//         ongetNewDetail:(id) => dispatch(actions.getListDetailNews(id)),
//         ongetNewsDetailByID:(id) => dispatch(actions.getListDetailNewsById(id))
//     }
// }

export default NewTrello;
