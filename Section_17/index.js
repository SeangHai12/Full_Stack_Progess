//Dice num1

var randomnum1 = Math.floor(Math.random() * 6) + 1;
var random_img1 = "dice" + randomnum1 + ".png";
var imagesoruce = "images/" + random_img1;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesoruce);

//Dice num2

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var random_img2 = "dice" + randomnum2 + ".png";
var imagesoruce2 = "images/" + random_img2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imagesoruce2);

// Win/Lose/Draw

if (randomnum1 > randomnum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
} else if (randomnum2 > randomnum1) {
  document.querySelector("h1").innerHTML = "Player 2 win! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
