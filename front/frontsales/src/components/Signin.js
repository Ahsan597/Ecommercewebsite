import React, { useState, useEffect } from 'react'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import { connect } from "react-redux";
import './Signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { TableBody } from '@material-ui/core';
import Useraccount from './Useraccount';
import { Redirect } from "react-router";

export default function Signin(props) {
    const [email, setEmail] = useState("");
    const [passwordshow1, setPasswordshow1] = useState(false)
    const [pass, setPass] = useState("");
    const [passerror, setPasserror] = useState(false);
    const [loger, setLoger] = useState("");
    const [emailerror, setEmailerror] = useState(false);
    // const [notmatched, setNotmatched] = useState(false);
    // const [emailerror3, setEmailerror3] = useState("email or password is in-valid");
    const [helperText2, setHelperText2] = useState();
    const [helperText3, setHelperText3] = useState();


    const history = useHistory();
    const submithandler = () => {
        axios.post('http://localhost:4200/signup/postsignin', {
            email: email,
            pass: pass
        })
            .then(response => {
                console.log("response.status: ", response.status, typeof response.status);
                if (response.status === 250) {
                    history.push("/useraccount");
                }
                else {
                    setLoger(response.data.message)
                }
                // console.log({ email: email })
                // console.log({ pass: pass })
            })
            .catch(error => {
                console.log("error: --------", error)
            });
    }
    useEffect(() => {
        if (email.length < 1) {
            setEmailerror(true);
            setHelperText3("must enter email")
        }
        else if (email.indexOf("@gmail.com") === -1) {
            setEmailerror(true);
            setHelperText3("email is invalid")
        }
        else {
            setEmailerror(false);
            setHelperText3("")
        }
        if (pass.length > 0 && pass.length < 8) {
            setPasserror(true);
            setHelperText2("password must be of eight characters ")
        }
        else if (pass.length < 1) {
            setPasserror(true);
            setHelperText2("must enter password ")
        }
        else if (pass.length == 8) {
            setPasserror(false)
            setHelperText2("")
        }
    }, [pass, email])

    const handleChange = (func, value) => {
        func(value)
    }
    return (
        <div>
            <div className="signinheight">
                <h3 className="loginerror">{loger}</h3>
                <div className="formsign" autoComplete="off" >
                    <h2 className="signintext2">Sign In</h2>
                    <p className="text8">Enter email or phone no:</p><br></br>
                    <TextField
                        error={emailerror}
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => handleChange(setEmail, e.target.value)}
                        id="standard-error-helper-text"
                        helperText={helperText3}
                        variant="standard"
                    /><br></br>
                    <p className="mm">Enter password:</p><br></br>
                    <TextField
                        error={passerror}
                        type={passwordshow1 ? "text" : "password"}
                        name="pass"
                        onChange={e => handleChange(setPass, e.target.value)}
                        id="standard-error-helper-text"
                        helperText={helperText2}
                        variant="standard"
                    />
                    {passwordshow1 ? <ShowIcon className="btnsh" onClick={() => setPasswordshow1(false)} /> : <ShowOffIcon className="btnsh" onClick={() => setPasswordshow1(true)} />}
                    <br></br>
                    <button className="btn7" disabled={emailerror === true || passerror === true} onClick={submithandler} >Sign In</button>
                </div>
            </div>
        </div>
    )
}
