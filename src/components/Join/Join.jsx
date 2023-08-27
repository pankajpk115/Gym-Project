import React from 'react'
import './Join.css'
export default function Join() {
  let btn = document.getElementById("form")
      function joined(){
        btn.addEventListener('click',()=>{
          window.alert("Do you Want to submit:");
        },);
      }
  return(
    <>
      
    <div className='container ' id="page3">
            <h1 id='join'>Get In Touch With Us</h1>
            <input type="text" id='joined'/>
            <select class="form-select" aria-label="Default select example" id='join'>
            <option selected>Join The Gym</option>
            <option value="1">Join The Gym</option>
            <option value="2">Get A Free Training session</option>
            <option value="3">Get a Free Trial</option>
            </select>
            <input type="text" id='joinus' placeholder='Enter Name'/>
            <input type="text" id='joinus' placeholder='Enter Email'/>
            <input type="text" id='joinus' placeholder='Enter Phone'/>
            <select class="form-select" aria-label="Default select example" id='join'>
            <option  >Seclect Location</option>
            <option value="1" className='option1'>Sector 30</option>
            <option value="2">Sector 31</option>
            <option value="3">sector 17</option>
            <option value="4">Palam </option>
            <option value="5">Vasant Kunj</option>
            <option value="6">Dwarka</option>
            </select><br />
            <button className="btn btn-warning " type='submit' id ="form" onClick={joined}>JOIN US</button>
    </div>
    </>
    
  );
}
