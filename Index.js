 //Mi solución 

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
        
        if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }   else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }   else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }   else if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }   else if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }   else  {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    
        if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }   else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }   else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }   else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }   else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }   else  {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
    
    if  (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
        }   
        else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";    
        }   
        else  {
        document.querySelector("h1").innerHTML = "Draw!";
        }


//Solución de Angela

    /*var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    
    if  (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    }   
    else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";    
    }   
    else  {
    document.querySelector("h1").innerHTML = "Draw!";
    }*/