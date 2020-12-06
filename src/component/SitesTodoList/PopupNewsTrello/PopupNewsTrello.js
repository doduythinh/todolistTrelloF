import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Modal, Toast} from "react-bootstrap";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
const  PopupNewsTrello = (props) => {
    const [show, setShow] = useState(false);
    const INITIAL_STATE = {
        nameDetail: "",
        orderDetail: 1,
        id:""
    }
    const [state,setState] = useState(INITIAL_STATE)
    useEffect(()=>{
        props.ongetNewDetail(props.id)
    },[])

    function changedDetailStatus(event) {
        event.preventDefault()
        console.log(event.target.value)
        setState({...state,nameDetail:event.target.value})
    }

    function addDetailStatus(event,id) {
        event.preventDefault()
        id = props.id
        // console.log("123456",props.listStatusDetail)
        let count = 0;
        if(props.listStatusDetail)
        {
            count = Object.keys(props.listStatusDetail).length
        }
        console.log("count",count)
        setState({...state,orderDetail:count+1})
        props.onAddNewDetail(state.nameDetail,state.orderDetail,id)
    }

    function popUpTrue(event,key) {
        // alert(key);
        setShow(true)
        setState({...state,id:key})
        props.ongetNewsDetailByID(key)
    }

    function popUpFalse(key) {
        setShow(false)
    }
    return (
        <Toast.Body>
            <>
                { props.listStatusDetail ? Object.keys(props.listStatusDetail).map(key=> {
                    // console.log("keykeykeykey", key);
                    return props.id === props.listStatusDetail[key].idNews ?
                        <input
                            className="form-control" key={key}
                            defaultValue={props.listStatusDetail[key].nameNews}
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
                                props.listStatusJustOne ? props.listStatusJustOne.nameNews : null
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
    );
}
const mapStateToProps = state =>{
    // console.log("mainDetailStatus",state.main.listStatusByid)
    return {
        listStatusDetail: state.main.listStatusByid,
        listStatusJustOne:state.main.nameDetailJustOnePopUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNewDetail:(nameDetail,orderDetail,id) => dispatch(actions.addNewsDetail(nameDetail,orderDetail,id)),
        ongetNewDetail:(id) => dispatch(actions.getListDetailNews(id)),
        ongetNewsDetailByID:(id) => dispatch(actions.getListDetailNewsById(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PopupNewsTrello);