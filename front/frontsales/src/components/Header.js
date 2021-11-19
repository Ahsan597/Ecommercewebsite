import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import SvgIcon from '@mui/material/SvgIcon';
// import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Header.css";
export default function Header() {
    return (
        <div>
            <div>
                <div className="navbar">
                    <div className="nav">
                        <ul className="ul">
                            <li className="li"><Link className="link capitallink" to="/"><StorefrontIcon className="storeicon" style={{ fontSize: 25 }}></StorefrontIcon> CaPiTaL StOrE</Link></li>
                            <li className="li li2"><Link className="link round" to="/"><HomeIcon style={{ fontSize: 40 }} />
                            </Link></li>
                            <li className="li li3"><Link className="link" to="/product">Product</Link></li>
                        </ul></div>
                    <div className="marginform">
                        <form className="d-flex formbody">
                            <input className="inp form-control " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <Link to="/signup" className="link link22"><button className="btn2 btn btn-outline-success "  >Sign up</button></Link>
                            <Link to="/signin" className="link"><button className="btn btn33 btn-outline-success">Sign in</button></Link>
                        </form>
                    </div>
                <div className="nav44">
                    <Link className="account ancc" to="/useraccount" ><AccountCircleOutlinedIcon style={{ fontSize: 40 }}></AccountCircleOutlinedIcon></Link>
                    <Link className="account acc" to="/deals" >Deals</Link>
                    <Link className="account acctt" to="/bonanza" >Bonanza</Link>
                    <Link className="account" to="/nike" >Nike</Link>
                    <Link className="account" to="/haier" >Haier</Link>
                    <Link className="account" to="/admin" >Admin</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
