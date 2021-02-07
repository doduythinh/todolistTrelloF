import React, {useEffect, useState} from "react";
import {
     Button, Form, Toast, Col,
} from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/actions/index";
import './NewsTrellos.scss';
import NewTrello from "./NewTrello/NewTrello";

const NewsTrellos = () => {
    let [name, setName] = useState("");
    let [order, setOrder] = useState(0);
    let [showMe, setShowMe] = useState(false);
    let [id, setId] = useState(false);
    let [display, setDisplay] = useState(false);
    let [nameDetail, setNameDetail] = useState("");
    let [orderDetail, setOrderDetail] = useState(0);
    let dispatch = useDispatch();
    const onChangeStatus = (event) => {
        event.preventDefault();
        setName(event.target.value)
    }
    let listStatus = useSelector(state => state.main.name);
    // add to list
    const addToStatus = async (event) => {
        event.preventDefault()
        let countListname = 0;
        if (listStatus) {
            countListname = Object.keys(listStatus).length;
        }
        await setOrder(countListname + 1)
        let action = actions.AddSite(name, order);
        dispatch(action);
    }
    //delete to list
    const deleteToStatus = (id, event) => {
        event.preventDefault()
        let action = actions.deleteNewsSite(id);
        dispatch(action);
    }
    //change to list Status
    const editListStatus = async (id, event) => {
        // console.log("12312312",event.key   == 'Enter')
        if (event.key == 'Enter' && event.target.value != '') {
            event.preventDefault()
            let countListname = 0;
            if (listStatus) {
                countListname = Object.keys(listStatus).length;
            }
            console.log("event.target.value", event.target.value)
            setOrder(countListname + 1)
            setName(event.target.value)
            setId(false)
            let action = actions.updateNews(name, order, id);
            dispatch(action);
        }
    }
    //change state when click
    const changeStateShow = async (key, event) => {
        event.preventDefault()
        await setId(key)
    }
    useEffect(() => {
        let action = actions.getSite();
        dispatch(action);
    }, [])

    //let orders = useSelector(state => state.main.order);
    return (
        <div className="wrapper">
            {
                Object.keys(listStatus)
                && Object.keys(listStatus).map((key) => {
                    // console.log("key",key)
                 return <NewTrello
                        key={key}
                        id={key}
                        changeStatus={(e) => editListStatus(key, e)}
                        stated={id}
                        deleted={(e) => deleteToStatus(key, e)}
                        listStatus={listStatus[key].name}
                        clicked={(e) => changeStateShow(key, e)}
                        changed={onChangeStatus}
                    />}
                )
            }
            <Col xs={3} md={3} sm={3}>
                <Toast>
                    <Form onSubmit={(e) => addToStatus(e)}>
                        <Toast.Body> <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            onChange={(e) => onChangeStatus(e)}
                        /></Toast.Body>
                        <Button variant="success" onClick={(e) => addToStatus(e)}>Thêm danh sách</Button>
                    </Form>
                </Toast>
            </Col>
        </div>
    )
}
export default NewsTrellos;
