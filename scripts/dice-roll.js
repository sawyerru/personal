function randomNum(){
    var num = Math.floor(Math.random() * 6);
    // console.log(num);
    return num + 1;
}
  
function rollDice(){
    //Player 1 action
    var roll1 = randomNum();
    var diceImg1 = "dice" + roll1 + ".png";
    var location1 = "../images/dice-imgs/" + diceImg1;
    document.querySelectorAll("img")[0].setAttribute("src", location1);

    //Player 2 action
    var roll2 = randomNum();
    var diceImg2 = "dice" + roll2 + ".png";
    var location2 = "../images/dice-imgs/" + diceImg2;
    document.querySelectorAll("img")[1].setAttribute("src", location2);

    console.log("Roll1: " + roll1 + "       Roll2: " + roll2);
    if (roll1 > roll2){
        //player1 wins
        document.querySelector("p.top").innerHTML = "👑"
        document.querySelector("p.top").style.textAlign = "left";
        document.querySelector("p.top").style.paddingLeft = "1rem";
    } else if (roll1 < roll2){
        //player2 wins
        document.querySelector("p.top").innerHTML = "👑"
        document.querySelector("p.top").style.textAlign = "right";
        document.querySelector("p.top").style.paddingRight = "1rem";
    } else{
        //tie
        document.querySelector("p.top").innerHTML = "Tie! Roll Again.";
        document.querySelector("p.top").style.textAlign = "center";
    }
    return;
}

