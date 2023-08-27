import React from 'react'
import './Page1.css'
export default function Page1() {

  return (
    <>


      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="page1_3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" id="caption_1">
              <h5>INTRODUCING YOU</h5>
              <p>THE BEST AND AFFORDABLE UNISEX GYM IN YOUR LOCALITY</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="page1_8.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" id="caption_1">
              <h5>CHALLENGE YOURSELF</h5>
              <p>BOOSTUP YPUR STAMINA UNDER GUIDANCE OF CERIFIED TRAINER</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="page1_7.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" id="caption_1">
              <h5>OUR MOTTO</h5>
              <p>IS TO CREATE HEALTHY AND FIT INDIA</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" id='c-button'>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" id='c-button'>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
