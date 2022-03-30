import React, { Component} from "react";
import Cards from "./data/projectCards.json";
import "../styles.css";

class Projects extends Component {
  render () {
    return (
      <div>
        <br/>
        <h2 className="side">UofT Bootcamp Projects</h2>
        {Cards.map ((cardDetail, index) => {
          return <div key={index}>
          <div className="proWrap">
          <h4>{cardDetail.cardname}</h4>
          <img className="portImg" src={cardDetail.image} alt="Project Card" />
          <a className="contactme" href={cardDetail.livelink} target="_blank" rel="noreferrer">Deployed Link</a>
          <br/><br/>
          <a className="contactme" href={cardDetail.codelink} target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
          </div>
        })}
      </div>
    )
  }
}

export default Projects;
