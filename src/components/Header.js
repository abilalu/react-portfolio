
import "./styles.css";
import React from "react";
import pro_pic from "./images/pro_pic.jpg"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">   
        <div className="side"><img className="profile" src={pro_pic} alt="profile" />
        <div className="headerText">
        <h1>Abi Lalu</h1>
          I am an aspiring web developer and i have completed my coding bootcamp course from University of Toronto School of Continuing Studies.I have gained knowledge in HTML,CSS,JavaScript,NodeJs,React,MERN and so on during the bootcamp session.<br/>
             </div>
             </div>
             </div>
    );
}

export default Header;