//start timer on load
var enterDate = new Date();

function secondsSinceEnter() //get total time
{
  return (new Date() - enterDate) / 1000;
}

//when user runs into an obstacle, get final time

//if user wins
document.getElementById("finish").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("YOU WIN THE CHAMPIONSHIP! Your winning time was: " + sec + " seconds!!!");
    window.location.href = "/results.html";
};

//if user loses
document.getElementById("hill").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
    window.location.href = "/results.html";
};

document.getElementById("opp").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
  window.location.href = "/results.html";
};

document.getElementById("apple").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
    window.location.href = "/results.html";
};

document.getElementById("peach").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
    window.location.href = "/results.html";
};

document.getElementById("shrub").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
    window.location.href = "/results.html";
};

document.getElementById("tree").onmouseover = function() {
    var sec = secondsSinceEnter();
    alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
    window.location.href = "/results.html";
};