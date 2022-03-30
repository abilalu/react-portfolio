import React from "react";
import github_icon from "../images/github_icon.svg";
import linkedIn_icon from "../images/linkedin_icon.png";
import email_icon from "../images/email_icon.png";

function Contact(props) {
  return (
    <div className="moreLeft">
      <h1>Contact Me</h1>
    <p>If you have any queries, please contact me.</p>
   <img className="contactImg" src={ github_icon } alt="github icon" /><a className="contactLink" href="https://github.com/abilalu" target="_blank" rel="noreferrer"> Github</a><br/>
    <img className="contactImg" src={ linkedIn_icon } alt="linkedIn icon" /><a className="contactLink" href="https://www.linkedin.com/in/abi-lalu/" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
    <img className="contactImg" src={ email_icon } alt="email icon" /><a className="contactLink" href="mailto:abilalu1994@gmail.com">Email me</a>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
  );
}

export default Contact;
