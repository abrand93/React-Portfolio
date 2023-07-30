import React from 'react';
import marvel from '../images/Screenshot 2023-04-24 170312.png'
import jobHive from "../images/Job Hive.png"
import passwordGen from "../images/passwordGen.png"
import weatherApp from "../images/WeatherApp.png"
import Scheduler from "../images/Scheduler.png"
import noteTaker from "../images/Note Taker.png"
export default function Protfolio() {
  const cardStyle = {
    width: '18rem'
  }
  return (
    // <div className = "container" style={{backgroundColor: "#F6AE2D"}}>
    <div className ="prot-Container" style={{backgroundColor: "#fcbf49",paddingBottom: "75px"}}>
     <h1>Protfolio</h1>
     <div className= "First3Cards d-flex justify-content-evenly" >
      <div ClassName= "card d-flex flex-row mb-3">
      
      <a href="https://abrand93.github.io/Marvel-world/"><h2>World of Marvel</h2>
      <img
         
          style={cardStyle}
          src={marvel}
          alt="marvel"
        />
        </a>
        <a href='https://github.com/abrand93/Marvel-world.git'><p>GitHub:Repo</p></a>
        </div>
        <div ClassName='card' style={cardStyle}>
        <a href='https://protected-refuge-18602-b5474f6525e3.herokuapp.com/'>
          <h2>JobHive</h2>
          <img src={jobHive}
          style={cardStyle}
            alt="jobHive ">
          </img>
        </a>
        <a href='https://github.com/nreece6/project-2-job-board.git'>
          <p>GitHub:Repo</p>
        </a>
        </div>
        <div ClassName='card' style={cardStyle}>
        <a href='https://abrand93.github.io/Random-password-generator-3.23/'>
          <h2>Password Genrator</h2>
          <img src={passwordGen}
          style={cardStyle}
            alt="PasswordGen ">
          </img>
        </a>
        <a href='https://github.com/abrand93/Random-password-generator-3.23.git'>
          <p>GitHub:Repo</p>
        </a>
        </div>
        </div>
        <div className= "Last3Cards d-flex justify-content-evenly">
        <div ClassName='card' style={cardStyle}>
        <a href='https://abrand93.github.io/06-Weather-app/'>
          <h2>Weather App</h2>
          <img src={weatherApp}
          style={cardStyle}
            alt="Wether app">
          </img>
        </a>
        <a href='https://github.com/abrand93/06-Weather-app.git'>
          <p>GitHub:Repo</p>
        </a>
        </div>
        <div ClassName='card' style={cardStyle}>
        <a href='https://abrand93.github.io/05-schedule-calendar/'>
          <h2>Calendar</h2>
          <img src={Scheduler}
          style={cardStyle}
            alt="calendar">
          </img>
        </a>
        <a href='https://github.com/abrand93/05-schedule-calendar.git'>
          <p>GitHub:Repo</p>
        </a>
        </div>
        <div ClassName='card' style={cardStyle}>
        <a href='https://ab-express-js-note-taker.herokuapp.com/'>
          <h2>Express Note Taker</h2>
          <img src={noteTaker}
          style={cardStyle}
            alt="Wether app">
          </img>
        </a>
        <a href='https://github.com/abrand93/Express.js-Note-Taker.git'>
          <p>GitHub:Repo</p>
        </a>
        </div>
        </div>
        
    </div>
  );
}
