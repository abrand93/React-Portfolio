import React from 'react';

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('Andrew_Brandstrom_Resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Andrew_Brandstrom_Resume.pdf';
          alink.click();
      })
  })}


export default function Resume() {


  

  return (
    <div className='card ' style={{backgroundColor: "#fcbf49", paddingBottom: "80px"}}>
      <h1>Resume</h1>

      <h2 className='ps-3'>Front End Proficincies</h2>
      <ul className='ps-5'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2 className ="ps-3">Back End Proficincies</h2>
   <ul className="ps-5">
   <li>APIs</li>
   <li>Node</li>
   <li>Express</li>
   <li>MySQL, Sequllize</li>
   <li>MongoDB, Mongoose</li>
   <li>Rest</li>
   <li>GraphQL</li>
  
   </ul>
   <div className="col-12 pt-5">
    <button className="btn btn-primary p" type="submit" onClick={onButtonClick}>Download Resume</button>
  </div>
    </div>
  );
}
