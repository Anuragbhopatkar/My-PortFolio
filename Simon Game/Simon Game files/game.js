



document.addEventListener("keypress",nextSequence);





let  userClickedPattern = [];


function handler(haha) {
  
    

let userChosenColour = haha;





userClickedPattern.push(userChosenColour);

console.log(userClickedPattern+"handler");

let rrr = userClickedPattern.length-1;




    document.getElementById(haha).style.backgroundColor= "silver";

    
    
    setTimeout(next, 100);
    function next(){

   
    
    document.getElementById(haha).style.backgroundColor = haha;

    }

for (let i=0; i<userClickedPattern.length;i++) {

if ( userClickedPattern[rrr]=== "blue")
{

    const audio = new Audio('sounds/blue.mp3');
    audio.play();
}
    
else if ( userClickedPattern[rrr]=== "green") {

    const audio = new Audio('sounds/green.mp3');
    audio.play();
}

else if (userClickedPattern[rrr]=== "red"){
const audio =new Audio('sounds/red.mp3');
audio.play();


} 


else if(userClickedPattern[rrr]=== "yellow"){

    const audio = new Audio('sounds/yellow.mp3');
    audio.play();
}

}

checkanswer();

}






let hyih;
let level= 0;
var gamePattern = [];


 function nextSequence(){


    level = level + 1;
 document.getElementById("level-title").innerHTML="Level"+" "+level;




    

    var random = Math.random();

    var number =random * 3;

    var randomnumber = Math.round(number);

  
var buttonColours =["red","blue","green","yellow"];

var randomChosenColour = buttonColours[randomnumber];

gamePattern.push(randomChosenColour);

console.log(gamePattern+"nextsequence");



let ggg = gamePattern.length - 1;



    document.getElementById(gamePattern[ggg]).style.backgroundColor= "silver";

    
    
    setTimeout(next,100);
    function next() {

   
    
    document.getElementById(gamePattern[ggg]).style.backgroundColor = gamePattern[ggg];
 
if ( gamePattern[ggg]=== "blue")
{

    const audio = new Audio('sounds/blue.mp3');
    audio.play();
}
    
else if ( gamePattern[ggg]=== "green") {

    const audio = new Audio('sounds/green.mp3');
    audio.play();
}

else if (gamePattern[ggg]=== "red"){
const audio =new Audio('sounds/red.mp3');
audio.play();


} 


else if(gamePattern[ggg] === "yellow"){

    const audio = new Audio('sounds/yellow.mp3');
    audio.play();
}

    }

   
 


 hyih ="started";

 Cancel();





}




function Cancel(){ 




    if (hyih==="started"){
    
      
        
        document.removeEventListener("keypress",nextSequence);
    }
    
        
    }


    function checkanswer() {


  
        let tes=-1;   

         

for(let a=0;a<gamePattern.length;a++){


    if (gamePattern[a]===userClickedPattern[a]){

   tes=tes +1;

        
    }
  

    
}
        


let ha = gamePattern.length -1 ;
if (gamePattern.length==userClickedPattern.length) {



if (ha===tes) 
{

  userClickedPattern.splice(0,userClickedPattern.length);
setTimeout(nextSequence,300);

}


else {

    document.getElementById("level-title").innerHTML = "Game Over ! press any key to restart";
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();

    let ddd= document.getElementsByClassName("aaa");

document.body.classList.toggle("kkk");

let  ABC = ()=> {
document.body.classList.remove("kkk");

}

setTimeout(ABC,700);

startover();




}

  }
       
}

        
    
function startover(){

    gamePattern.splice(0,gamePattern.length);
    userClickedPattern.splice(0,userClickedPattern.length);
    
    level = 0;
    
    
    document.addEventListener('keypress',function() {
        
        setTimeout(nextSequence,200);
    
    } ) ;

}