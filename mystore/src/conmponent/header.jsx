import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from "../redux/action";
import LogIn from './login';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Register from './register'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export const Header = () => {
    const [ifLogin, setIfLogin] = useState(false)
    const nameUser = useSelector(state => state.users.Username);
    const dispatch = useDispatch();
    const logOut = () => {
        return false
    }
    /**nameUser!=undefined?logOut:<LogIn/>,<Register/> */
    function OnClickLog() {
        if (nameUser !== undefined) {
            dispatch(logout(nameUser))
        }
        else {
            setIfLogin(true)
        }
    }
    return <div>
        <label>My Store</label>
        <label>{nameUser != undefined ? `Wellcome to: ${nameUser}` : `Wellcome Guest`}</label>
        <br />
        <button onClick={() => OnClickLog()}>{nameUser != undefined ? 'LogOut' : 'LogIn'}</button>
        {ifLogin && <Router><LogIn></LogIn></Router>}
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn href="#">MDBBtn</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </div>
}