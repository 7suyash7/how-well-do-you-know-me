var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's you Name? ");

console.log("Welcome!  " +  userName + " To Do you Know Suyash? ");



function play (question, answer) {
var userAnswer = readlineSync.question(question);
if (userAnswer === answer) {
  console.log("Right! ");
  score = score + 1;
  console.log("Current Score: " , score);
  console.log("---------------");
} else {
  console.log("Wrong! ");
  console.log("Current Score: " , score);
  console.log("---------------");
}
}

play ("Where does Suyash Live? ", "Pune")
play ("How Old is Suyash? ", "18")
play ("Which is his Favourite Sport? ", "Football")
play ("Which is his Favourite Dish? ", "Pizza") 
play ("Which is his Favourite Football Team? ", "Real Madrid")

console.log ("YAY! you scored :",+ score)