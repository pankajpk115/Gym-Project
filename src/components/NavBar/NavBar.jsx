// import PropTypes from 'prop-types';
import './NavBar.css'
import React from 'react'

function Navbar() {
  let a = document.getElementById('page3');
  function memberShips(){
    const autoScroll = ()=>{
      window.scrollBy(0,2100);
      // let scrolldelay = setTimeout(autoScroll,1);
    }
    autoScroll(1);
  }
  function gymClub(){
    const autoScroll = ()=>{
      window.scrollBy(0,5);
      // let scrolldelay = setTimeout(autoScroll,1);
    }
    autoScroll();
  }
  
    function joinUs(){
      if(a.style.display ==="none"){
        a.style.display = "block";
      }
      else{
        a.style.display = "none";
      }
      const autoScroll = ()=>{
        window.scrollBy(0,2500);
        // let scrolldelay = setTimeout(autoScroll,1);
      }
      autoScroll(1);
    }
  return (
    <>
      <div id='navbar-main'>
        <nav className="navbar default navbar-expand-lg bg-body-tertiary position-fixed" data-bs-theme="dark" id="navbar">

          <div className="container-fluid" id="nav">
            <a href="/"><img src="logo2.jpg" alt="logo" className="logo " width={50} /></a>
            <a className="navbar-brand"  onClick={gymClub}>GYM Club</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="coll">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/" >About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" >Contact</a>
                </li>
                <li className="nav-item dropdown" id="more">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item"  onClick={memberShips}>Memberships</a></li>
                    <li><a className="dropdown-item" href="/">Staff</a></li>
                  </ul>
                </li>
              </ul>
              <button className="btn btn-warning" id = "join-us-nav" onClick={joinUs}>JOIN US</button>
            </div>

          </div>
        </nav>
      </div>

    </>
  )
}

export default Navbar;