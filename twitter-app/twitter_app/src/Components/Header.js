import React from 'react';
import '../Css/Header.css';
const Header = () => {
    let headerTitle = "This is the header";
    let numberOfUsers = 24;
    return (
      <div className = "Header">
        <p>{headerTitle}</p>
        <p>Number of users: {numberOfUsers}</p>
      </div>
    );//() important here
  };


export default Header;