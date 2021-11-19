import React from 'react';
import { Link } from 'react-router-dom';
import "./Useraccount.css";
import PersonIcon from '@mui/icons-material/Person';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Useraccount(props) {
    return (
        <div>
            <div>
                <div>
                    <h3 className="youracc"> Account Manager</h3>
                </div>
                <div className="accountdiv">
                    <Link className="acclink" to="/profile"><div>
                        <li className="accmanage"><h3 className="managename">Your Profile</h3></li><PersonIcon className="manageicon" style={{ fontSize: 100 }} ></PersonIcon></div></Link>

                    <Link className="acclink" to="/order"><div>
                        <li className="accmanage"><h3 className="managename">Your Orders</h3></li><MoveToInboxIcon className="manageicon" style={{ fontSize: 100 }}></MoveToInboxIcon></div></Link>

                    <Link className="acclink" to="help"><div>
                        <li className="accmanage"><h3 className="managename">Any help</h3></li><HelpOutlineIcon className="manageicon" style={{ fontSize: 100 }}></HelpOutlineIcon></div></Link>
                </div>

            </div>
        </div>
    )
}
