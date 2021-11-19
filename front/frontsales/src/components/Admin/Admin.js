import React, { useState, Fragment } from 'react'
import Box from '@mui/material/Box';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import "./Admin.css";
import TextField from '@mui/material/TextField';

export default function Admin() {
    const [productname, setProductname] = useState("");
    const [productimage, setProductimage] = useState("");
    const [productprice, setProductprice] = useState("");

    const submithanlder = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productImage', productimage)
        formData.append('productname', productname)
        formData.append('profileprice', productprice)
        axios.post('http://localhost:4200/Product/postpro', formData,{
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    }
    const handleChange = (func, value) => {
        func(value)
    }

    return (
        <div>
            <div className="margin-top">
                <div className="form" autoComplete="off">
                    <h2>Post Product</h2><br></br>
                    <p className="mm">Add  Product Name:</p><br></br>
                    <TextField
                        // error={nameerror}
                        type="text"
                        name="productname"
                        value={productname}
                        onChange={e => handleChange(setProductname, e.target.value)}
                        id="standard-error-helper-text"
                        // helperText={helpertext}
                        variant="standard"
                    /><br></br>
                    <p className="mm proimg">Add Product image :</p><br></br>
                    <Fragment>
                        <input
                            // accept="image/*"
                            className="proimgs"
                            name= "productimage"
                            id="icon-button-photo"
                            value= {productimage}
                            onChange={e => handleChange(setProductimage, e.target.value)}
                            type="file"
                        />
                    </Fragment>
                    <br></br>
                    <p className="mm mmmm proprice">Add Product Price:</p><br></br>
                    <TextField
                        // error={name1error}
                        type="text"
                        name="productname"
                        value={productprice}
                        onChange={e => handleChange(setProductprice, e.target.value)}
                        id="standard-error-helper-text"
                        // helperText={helperText2}
                        variant="standard"
                    />
                    <br></br>
                    <button className="btn7" onClick={submithanlder}>Post</button>
                </div>
            </div>
        </div>
    )
}
