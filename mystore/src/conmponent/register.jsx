import { useState,useRef } from "react"
import {login,logout} from "../redux/action";
import { useDispatch } from 'react-redux';
import {BrowserRouter as Route,withRouter} from "react-router-dom";

export default withRouter (function Register(props){
    const [password,setPassword]=useState('');
    const [passwordVerify,setPasswordVerify]=useState('');
    const [userName, setUserName] = useState('');
    const passwordVerifyRef = useRef(null);
    const dispatch = useDispatch();
    const SaveInStore = (Username) => {
        dispatch(login(Username))
    }
    function CheckPassword()
    {
        if(password!=passwordVerify)
            {
                passwordVerifyRef.current.focus(); 
                alert("the password isnt the same")
                setPasswordVerify("")
                setPassword("")
            }
        else{
            SaveInStore(userName);
            props.history.push('/MyBasket');
        }
    }
    return <div>
        <h1>Creat User</h1>
        <div>
            <label>User Name</label>
            <input value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
            <br/>
            <label>Password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <br/>
            <label>Verify Password</label>
            <input value={passwordVerify} onChange={(e)=> setPasswordVerify(e.target.value)} ref={passwordVerifyRef}></input>
            <br/>
            <button onClick={CheckPassword}>Create User</button>
        </div>
    </div>
 })
