// Changing first dice image randomly

var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var r1img = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",r1img);

// Changing second dice image randomly

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
var r2img = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",r2img);

// Changing h1
// 🏆

if(randomNumber1>randomNumber2)
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
else if (randomNumber1<randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
else
  document.querySelector("h1").innerHTML = "🏆 Draw! 🏆";
