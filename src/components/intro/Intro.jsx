import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className = "intro" id  = "intro">
         <div className="left">
             <div className ="imgContainer">
                 <img src="assets/Muhammad.png" alt="muhd"/>
             </div>
              </div>  

         <div className="right">
          <div className="wrapper">

              <h2> Hi There, I'm</h2>
              <h1>Muhammad bin Mahmood</h1>
              <h3>Freelance <span></span> Web Developer</h3>

          </div>
      <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
      </a>

     </div> 
        </div>
    )
}
