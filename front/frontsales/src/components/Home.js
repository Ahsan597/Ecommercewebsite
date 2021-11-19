import React from 'react';
import store2 from "./../assets/store2.jpg"
import Box from '@mui/material/Box';
import "./Home.css";
export default function Home() {
    return (
        <div >
            <div>
                <div className="background">
                    <h1></h1>
                </div>
                <div className="back2">
                    <h1 className="homeheader">Save your time</h1>
                    <h1 className="homeheader homeheader2"> Buy from Capital Store</h1>
            </div>
            </div>
            <div className="relatedproduct333">
                <div className="relatedproduct">
                    <p className="relateddeals">Related to your shopping history</p>
                </div><hr></hr>
            </div>
        </div>
    )
}
