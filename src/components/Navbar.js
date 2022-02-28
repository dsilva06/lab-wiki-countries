import React from "react";
import { Link } from "react-router-dom";

const Navbar  = () => {
    return(
        <div>
            <h1>Wiki Countries</h1>
            <Link to="/countries">Countries</Link>
        </div>
    )
   
}


export default Navbar