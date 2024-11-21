import React from "react";
import "./Sectionfive.css"




function Sectionfive(){

    let urll="../public/dicee challenge/dicee.html";

let url2="../public/Drum kit/index.html";
    
 let url3="../public/Simon Game/Simon Game files/index.html"

 let url4="../public/bootstrap/Bootstrap Components/index.html"

 let url5="../public/national flag/india.html"


    return(

        <div id="Sectionfive">  


<h1>My work </h1>

 

 <span id="left"> ► <a href={urll}  target="_blank" >   Dicee game </a> </span>
 <span id="left"> ► <a href={url2}  target="_blank" >  A Drum Kit</a>  </span>

 <span id= "left">►  <a href={url3}  target="_blank" >  Simon game </a> </span>
 <span id= "left"> ►  <a href={url4}  target="_blank" >  Bootstrap home page </a> </span>
 <span id="left" > ►  <a href={url5}  target="_blank" >  National flag </a> </span>
 <span id="left" > ►  <a   target="_blank" >  Family tracker  </a> </span>

 
</div>
    )
}

export default Sectionfive;