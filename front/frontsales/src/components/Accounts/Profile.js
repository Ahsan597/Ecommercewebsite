import React from 'react';
import "./Profile.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function Profile() {
    return (
        <div>
            <div className="profileheadicon"><PermIdentityIcon className="identity" style={{ fontSize: 170 }}></PermIdentityIcon></div>
            <div className="identitydiv">
                <h4 className="identitydata">Name:</h4>
                <h4 className="identitydata">Email:</h4>
            </div>
            <div className="footerclose">
                <hr className="hrbrbr "></hr>
                <div className="browsing">
                    <h3 className="yourbro">Your Browsing History</h3>
                </div>
                <hr className="hrbrbr"></hr>
            </div>
        </div>
    )
}
