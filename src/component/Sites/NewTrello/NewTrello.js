import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Toast,Form,Button,Modal} from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import "../newsTrello.css";
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
const NewTrello  = (props) =>
{
    const [show, setShow] = useState(false);
    return (
        <Col xs={3} key={props.id}>
                <Toast>
                    <Toast>
                        <strong  onClick={props.clicked}
                                 className="mr-auto strong">{props.listStatus}
                        </strong>
                        <AiOutlineClose className="daux" size={20}  onClick={props.deleted}/>
                        {props.stated === props.id ? <div onKeyUp={props.changeStatus}><input
                            // ref="inputTarget"
                            type="text"
                            className="form-control texarea"
                            defaultValue={props.listStatus}
                            onChange={props.changed}
                        /></div> : <div></div>}
                    </Toast>
                    <Toast.Body>
                        <>
                            <Form onSubmit={props.submitDetail}>
                                <input className="form-control"  onChange={props.changedDetail} />
                            </Form>
                            {/*{Object.keys(props.listdetailStatus).map(key=>(*/}
                            {/*    <input className="form-control" defaultValue={props.listdetailStatus[key].nameDetail} onChange={props.changedDetail} />*/}
                            {/*))}*/}
                            <Modal xs={12}
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        Custom Modal Styling
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
export default NewTrello;