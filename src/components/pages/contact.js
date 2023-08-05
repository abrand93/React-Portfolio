import React from 'react';

export default function Contact() {
  return (
    <div className="card" style={{backgroundColor: "#fcbf49", paddingBottom: "300px"}}>
    
      <h1>Contact</h1>
      <div className='p'>
     
      <label for="exampleFormControlTextarea1" class="form-label">Name:</label>
  <input type="text" className='m-2'></input>
  </div>
      <div>
      <div className="form-group m-2">
    <label for="exampleInputEmail1 ">Email address</label>
    <input type="email" placeholder="Enter email" className='m-4'/>
   
  </div>
</div>
<div className="">
  <label for="exampleFormControlTextarea1" className="m-2">Example textarea</label>
  <textarea  id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className="col-12 pt-5">
    <button className="btn btn-primary p" type="submit">Submit</button>
  </div>
  <ul>
     <h3>My contact Info</h3>
  <li> Email: abranstrom93@gmail.com</li>
  <li>Phone: 651-295-1783 </li>
  
  </ul>
</div>
    </div>
  );
}
