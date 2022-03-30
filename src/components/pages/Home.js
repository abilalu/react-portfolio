import React from "react";
import "../styles.css";
import pro_pic from "../images/pro_pic.jpg";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid"> 
      <div className=""><img className="profile" src={pro_pic} alt="profile" />
      <p className="headerText">  
     <h1>Abi Lalu</h1>
          I am an aspiring web developer and i have completed my coding bootcamp course from University of Toronto School of Continuing Studies.I have gained knowledge in HTML,CSS,JavaScript,NodeJs,React,MERN and so on during the bootcamp session.<br/>
      </p> 
    </div>
    </div>
  );
}

export default Home;
