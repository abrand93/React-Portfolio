import React from 'react';

export default function Contact() {
  return (
    <div className="card" style={{backgroundColor: "#fcbf49", paddingBottom: "300px"}}>
      <h1>Contact</h1>
      <div class="m-5">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="m-5">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div class="col-12 pt-5">
    <button class="btn btn-primary p" type="submit">Submit</button>
  </div>
</div>
    </div>
  );
}
