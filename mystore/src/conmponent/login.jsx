import { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "../redux/action";
import { BrowserRouter as Route, withRouter } from "react-router-dom";
import axios from "axios";
import { MDBTooltip, MDBContainer, MDBBtn } from "mdbreact";
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import Register from "./register";


export default withRouter(function LogIn(props) {
    const style = { display: "inline-block", maxWidth: "50vh" };

    const inputUserName = useRef(null);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [flag, setFlag] = useState(flase);
    const [mail, setMail] = useState('');
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const SaveInStore = (Username) => {
        dispatch(login(Username))
    }
    const SaveInStore1 = (mail1) => {
        dispatch({ type: 'SAVE_MAIL', payload: mail1 })
        // dispatch(maill(mail1))
    }
    const SaveInStore2 = (pass1) => {
        dispatch({ type: 'SAVE_PASSWORD', payload: pass1 })
        // dispatch(pass(pass1))
    }
    const state = {
        modal: false
      }
    const toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    useEffect(() => {
        if (inputUserName.current)
            inputUserName.current.focus();
    }, [])
    //serverבדיקה אם היוזר קיים שליפה מה  
    async function IsExsist() {
        let body = { mail: mail, password: password }
        let url = `http://localhost:4002/user/login`;
        try {
            const data = await axios.post(url, body)
            console.log(data)
            setFlag(true)
            //return allProudct.data.Products;
        } catch (e) {
            console.log(e)
            setFlag(false)
        }

    }
    function saveInStore() {
        IsExsist()
        //console.log(flag)
        if (flag == true) {
            SaveInStore(userName);
            SaveInStore1(mail);
            SaveInStore2(password);
            props.history.push('/MyBasket')
        }
        else {
            alert("User does not exist")
            setFlag(true);
        }
    }


    return <div>
        <h1>Login</h1>
        {flag == false && <div>
            <label className="font-weight-bold">User Name</label>
            <input ref={inputUserName} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <br></br>
            <label>Mail</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <label>Password</label>
            <input value={mail} onChange={(e) => setMail(e.target.value)}></input>
            <br></br>
            <button onClick={saveInStore}>Login</button>
            <MDBContainer className="text-center p-5">
      <MDBTooltip placement="top">
        <MDBBtn color="primary">Top tooltip</MDBBtn>
        <div>MDBTooltip on top</div>
      </MDBTooltip>

      <div>
        <div style={style} className="text-right">
          <MDBTooltip placement="left">
            <MDBBtn color="primary">Left tooltip</MDBBtn>
            <div>MDBTooltip on left</div>
          </MDBTooltip>
        </div>

        <div style={style} className="text-left">
          <MDBTooltip placement="right">
            <MDBBtn color="primary">Right tooltip</MDBBtn>
            <div>MDBTooltip on right</div>
          </MDBTooltip>
        </div>
      </div>

      <MDBTooltip placement="bottom">
        <MDBBtn color="primary">Bottom tooltip</MDBBtn>
        <div>MDBTooltip on bottom</div>
      </MDBTooltip>
    </MDBContainer>
    <MDBContainer>
      <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          (...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
        </div>}
        {flag == true && <div>
            <Register />
        </div>}
    </div>
    
})