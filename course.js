
//console.log(window.top);
$(function()
{
    //console.log("before");
    // in case of use 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=40.5863028,-75.3552942&radius=50&type=hospital'
    const URL = 'https://fcc-weather-api.glitch.me/api/current?lat=53.70&lon=-1.24'
    //console.log("before1");
    $.ajax({
        url: URL,
        type: "GET",
        //headers: {'Access-Control-Allow-Origin': '*'},
        success: function(result){
        console.log("The temperature during in " + result.name + "will be: " + result.main.temp);
    },
    error: function(error)
    {
        console.log(`Error ${error}`)
    }
    })
    //console.log("after");
   

});

