document.addEventListener("DOMContentLoaded", function () {
    var letter = 0;
    const text = "A new generation of Q-pop";
    function textAnimation() {
      if (letter < text.length) {
        document.getElementById("type-js").innerHTML += text.charAt(letter);
        letter++;
        let speed = Math.floor(Math.random() * 70);
        setTimeout(textAnimation, speed);
      }
    }
    textAnimation();
});


var x = document.getElementById("myAudio"); 
function playAudio() { 
  x.play(); 
} 
function pauseAudio() { 
  x.pause(); 
} 
var y = document.getElementById("mySong"); 
function playSong() { 
  y.play(); 
} 
function pauseSong() { 
  y.pause(); 
} 


document.getElementById("mouse1").addEventListener("mouseover", mouseOver1);
document.getElementById("mouse1").addEventListener("mouseout", mouseOut1);
function mouseOver1() {
  document.getElementById("mouse1").style.color = "gray";
}
function mouseOut1() {
  document.getElementById("mouse1").style.color = "white";
} 


document.getElementById("mouse2").addEventListener("mouseover", mouseOver2);
document.getElementById("mouse2").addEventListener("mouseout", mouseOut2);
function mouseOver2() {
  document.getElementById("mouse2").style.color = "gray";
}
function mouseOut2() {
  document.getElementById("mouse2").style.color = "white";
} 


