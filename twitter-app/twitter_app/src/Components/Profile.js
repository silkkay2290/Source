import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Profile = () => {
    return(
        <div>
        <p>This is profile page</p>
        <Link to="/"> Home page </Link>
        </div>
    );
}

export default Profile;