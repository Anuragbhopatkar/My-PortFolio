function Ran() { 

 
    
    var random = Math.random();

var randomm = random * 6;

var randomnumber = Math.round(randomm);



if ( randomnumber===1){ 

    document.querySelector(".img1").setAttribute("src","images/dice1.png");
}

 else if (randomnumber===2) {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");

}
 else if (randomnumber===3) {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");

}  

 else if (randomnumber===4) {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");

}  

 else if (randomnumber===5) {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");

}  

 else if (randomnumber===6) {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");

}  

Rann();










function Rann(){

    var rand = Math.random();

    var randd = rand * 6;
    
    var randomnumberr = Math.round(randd);
    
   
    
    if ( randomnumberr===1){
    
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    
     else if (randomnumberr===2) {
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    
    }
     else if (randomnumberr===3) {
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    
    }  
    
     else if (randomnumberr===4) {
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    
    }  
    
     else if (randomnumberr===5) {
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    
    }  
    
     else if (randomnumberr===6) {
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    
    }  


    Rannn();
    function Rannn() {

        
        
        if(randomnumber < randomnumberr) {
        
            document.querySelector("h1").innerHTML = "Player 2 Wins";
        }
        
        else {
            document.querySelector("h1").innerHTML = "Player 1 Wins";
        
    
        }
    
       
        
        }
    

    

}





}














