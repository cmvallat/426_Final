

//start timer on load
var enterDate = new Date();
var started = false;

function secondsSinceEnter() //get total time
{
  return (new Date() - enterDate) / 1000;
}



document.getElementById('red').addEventListener('click',function() 
{
    enterDate = new Date();
    started = true;
    //console.log("button clicked");
    document.getElementById("hill").style.animationPlayState = "running";
    document.getElementById("opp").style.animationPlayState = "running";
    document.getElementById("apple").style.animationPlayState = "running";
    document.getElementById("peach").style.animationPlayState = "running";

});

//when user runs into an obstacle, get final time

//if user wins
document.getElementById("finish").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";    
        alert("YOU WIN THE CHAMPIONSHIP! Your winning time was: " + sec + " seconds!!!");
        window.location.href = "/win.html";
    }
};

//if user loses
document.getElementById("hill").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";   
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
        window.location.href = "/lose.html";
    }
};

document.getElementById("opp").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";   
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
        window.location.href = "/lose.html";
    }
};

document.getElementById("apple").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";   
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
        window.location.href = "/lose.html";
    }
};

document.getElementById("peach").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";   
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds.");
        window.location.href = "/lose.html";
    }
};

document.getElementById("shrub").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";  
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds."); 
        window.location.href = "/lose.html";
    }
};

document.getElementById("tree").onmouseover = function() 
{
    if(started)
    {
        var sec = secondsSinceEnter();
        document.getElementById("hill").style.animationPlayState = "paused";
        document.getElementById("opp").style.animationPlayState = "paused";
        document.getElementById("apple").style.animationPlayState = "paused";
        document.getElementById("peach").style.animationPlayState = "paused";  
        alert("Oh no! You lost the race! Your final time was: " + sec + " seconds."); 
        window.location.href = "/lose.html";
    }
};