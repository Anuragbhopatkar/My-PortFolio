import React, { useState } from "react";
import './Sectionfour.css';




function Sectionfour(){
   
const [width,setwidth]=useState(window.innerWidth);
    window.addEventListener("resize",()=>{ setwidth(Abc) });


    
   
    function Abc(){ 

      
    if( window.innerWidth > 600 ) {    

        return (
        <div id="Sectionfour"> 
        <strong style={{marginLeft:"10%"}}>   Address </strong> <strong style={{marginLeft:"30%"}}>  Email </strong> <strong style={{marginLeft:"30%"}}>  Phone </strong>
        <span style={{marginLeft:"10%"}}>   Goregaon,Mumbai-400063 </span> <span style={{marginLeft:"21%"}}>  AnuragBhopatkar@gmail.com</span> <span style={{marginLeft:"19%"}}> +91 9768846535</span>
         </div>
        )
    } 
    else {
        return (
      <div id="Sectionfour"> 
    
   
    <strong style={{marginLeft:"10%"}}>   Address </strong>
    <span style={{marginLeft:"10%"}}>   Goregaon,Mumbai-400063 </span>
    
    <strong style={{marginLeft:"30%"}}>  Email </strong> 
    <span style={{marginLeft:"30%"}}>  AnuragBhopatkar@gmail.com</span>
    
    <strong style={{marginLeft:"45%"}}>  Phone </strong>
    <span style={{marginLeft:"45%"}}> +91 9768846535</span>
    </div>
    )
    }

}
    return (

<div id="Sectionfour"> 

<h1>Reach  out</h1>
<h1>To Me</h1>



{Abc()}





</div> )




}



export default Sectionfour;