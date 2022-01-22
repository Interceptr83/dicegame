var userName = "";
var number ="";

function checkWin(){
    if (number === 6) {
        window.alert(`${userName} you rolled ${number}, you win!`);
    } else{
        window.alert(`${userName} you rolled ${number}, you lose !`);
    };
};

function diceRoll(){
// imagine this code generating a random number between 1 and 6
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
number = getRandomIntInclusive(1,6);

checkWin();
};

function getUsername(){
    // imagine code to take an input from a text box on the page asking to input your userName
    userName = window.prompt("enter your name");
    };

getUsername();

diceRoll();

//this will run a function to ask for a username then assign their asnwer to the userName variable, then it will 
// run a function to roll a random number between 1-6 and save that to the variable number.
// then it will run a function that checks if the number was a 6. it checks if that variable number is 6. if so it
//will tell you you won using your name that you typed in. if the number is anything other than a 6 it will
// tell you you lost using your name you input