import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
        <footer id='footer'>
            <div className="footer" id='foot'>
                <div className="row">
                    <div className="row">
                        <div className='col'>
                            <p>ADDRESS</p>
                            <p id='details'>Opposite city centre</p>
                        </div>
                    
                        <div className="col">
                            <a href="#" id='email'><p>EMAIL</p></a>
                            <p id='details'>thegymclub@gmail.com</p>
                        </div>
                        <div className="col">
                            <p>PHONE</p>
                            <p id='details'>+91-98xxxxxxxx</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span >
                        <img src="iglogo.jpg" alt="Instagram" id='social-handles'/>
                        
                    </span>
                    <span>
                        <img src="twtlogo.jpg" alt="Twitter" id='social-handles'/>
                        
                    </span>
                    <span>
                        <img src="fblogo.jpg" alt="FaceeBook" id='social-handles'/>
                        
                    </span>
                </div>
        
            </div>
      </footer>
    </>
  )
}
