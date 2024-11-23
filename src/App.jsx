import { useState } from 'react';

import './App.css';
function App() {
  var fff= document.getElementById("nav");
let [Haha,setHaha]=useState(1);


function Mouseover(){

fff.style.opacity=1;

setHaha(Haha+=1);


}


function Mouseleave(){

  fff.style.opacity=0;
  setHaha(Haha+=1);
  

}

 
 



  return (
    
    <div id='nav'onMouseOver={Mouseover} onMouseOut={Mouseleave}>

 
 <nav> 
  
 <a href='#Sectionone'>   Home   </a>
 <a href='#Sectiontwo'>  About  </a>
 <a href='#Sectionthree'> My Background  </a> 
 
  

   </nav>

  
 
    </div>
    

 
    
  )

}





export default App
