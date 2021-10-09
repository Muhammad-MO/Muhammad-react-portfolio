import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./workexperience.scss"
import{useEffect, useState} from "react";
import{
    Rotaryeng,
    JGCeng,
    PureInt,
    ColaberraTech,
                       } from "../../data2";



export default function Workexperience() {
    const[selected, setSelected] = useState("Rotary")
    const[data2, setData2] = useState([]);

    const list =[

        {

            id: "Rotary",
            title: "Rotary",
        },

        {

            id: "JGC",
            title: "JGC",
        },

        {

            id: "Pure",
            title: "Pure Yoga",
        },

        {

            id: "Colaberra",
            title: "Colaberra Technologies",
        },

       

    ];

    useEffect(() => {
        switch(selected){
           case "Rotary":
               setData2(Rotaryeng);
               break;

               case "JGC":
               setData2(JGCeng,
                );
               break;

               case "Pure":
               setData2(PureInt);
               break;

               case "Colaberra":
               setData2( ColaberraTech,
                );
               break;

               
              default:
              setData2(Rotaryeng);
    
    }

    },[selected])
    return (
        <div className = "workexperience" id = "workexperience">
            <h1>Work Experience</h1>
       <ul>
              {list.map(item=>(
                  <PortfolioList title={item.title} active={selected === item.id} 
                  setSelected={setSelected} id={item.id}/>
              ))} 
       </ul>
       <div className="container">
           {data2.map((d) => (
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
