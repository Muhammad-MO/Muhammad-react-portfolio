import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import{useEffect, useState} from "react";
import{
    SchoolProjectsPortfolio,
    foodPortfolio,
    exercisePortfolio,
    landingpagePortfolio,
                   } from "../../data";




export default function Portfolio() {
    const[selected, setSelected] = useState("School_Projects")
    const[data, setData] = useState([]);

    const list =[

        {

            id: "School_Projects",
            title: "School_Projects",
        },

        {

            id: "Food",
            title: "Food App",
        },

        {

            id: "Exercise",
            title: "Exercise App",
        },

        {

            id: "Landing",
            title: "Landing_page App",
        },

       
        

    ];

    useEffect(() => {
        switch(selected){
           case "School_Projects":
               setData(SchoolProjectsPortfolio);
               break;

               case "Food":
               setData(foodPortfolio);
               break;

               case "Exercise":
               setData(exercisePortfolio);
               break;

               case "Landing":
               setData(landingpagePortfolio);
               break;

              default:
              setData(SchoolProjectsPortfolio);
    
    }

    },[selected])
    return (
       
        <div className = "portfolio" id = "portfolio">
            <h1>Portfolio</h1>
       <ul>
              {list.map(item=>(
                  <PortfolioList title={item.title} active={selected === item.id} 
                  setSelected={setSelected} id={item.id}/>
              ))} 
       </ul>
       <div className="container">
           {data.map((d) => (
        <div className="item">
       <img src={d.img} alt=""
       />
       <h3>{d.title}</h3>

       
        </div>

           ))}
  

         </div>
       
        </div>

     
        
    );
}
