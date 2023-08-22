import React from 'react';
import photoOfMe from "../images/Me.jpg"

export default function About() {
  return (
    <div className="card p-5" style={{backgroundColor: "#fcbf49",paddingBottom: "455px"}}>
      <h1>About Me</h1>
      <img src={photoOfMe}
      alt="PhotoOf me"
      style={{width: "18rem"}}></img>
      <p> My name is Andrew Brandstrom. I’m starting my adventure in becoming a web developer. This is my
        portfolio. I'm a few weeks away from completing UofM coding bootcamp. 
        //   I’m currently a production supervisor for Trafera. I’ve
        // worked there for 9 years. Once completing bootcamp I'm looking to make a caree change in to becoming a
        // developer.
        

        
        
        
      </p>
    </div>
  );
}
