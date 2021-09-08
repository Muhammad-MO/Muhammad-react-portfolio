import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"

export default function Portfolio() {

    const list =[

        {

            id: "featured",
            title: "Featured",
        },

        {

            id: "web",
            title: "Web App",
        },

        {

            id: "mobile",
            title: "Mobile App",
        },

        {

            id: "design",
            title: "Design",
        },

        {

            id: "branding",
            title: "Branding",
        }
        

    ]
    return (
        <div className = "portfolio" id = "portfolio">
            <h1>Portfolio</h1>
       <ul>
              {list.map(item=>(
                  <PortfolioList title={item.title}/>
              ))} 
       </ul>
       <div className="container">
        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Banking App</h3>
        </div>

        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Bankioo App</h3>
        </div>

        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Banking App</h3>
        </div>

        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Banking App</h3>
        </div>

        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Banking App</h3>
        </div>

        <div className="item">
       <img src="assets/rev.jpeg" alt="rev"/>
       <h3>Banking App</h3>
        </div>



       </div>
        </div>
    )
}
