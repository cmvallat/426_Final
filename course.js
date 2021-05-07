
$(function()
{
    //CALLING A WEATHER API FROM FREE CODE CAMP - MY ATTEMPT AT 20 API POINTS
    // in case of fixing issue, use 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=40.5863028,-75.3552942&radius=50&type=hospital'
    var lat = 40.5863028;
    var lon = -75.3552942;
    const URL = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon
    $.ajax(
    {
        url: URL,
        type: "GET",
        success: function(result)
        {
            //convert to farenheit cause we love america
            var CtoF = 9 / 5;
            var F = ((result.main.temp * CtoF) + 32);
            var final = Math.floor(F);

            //display weather data
            $("#formone").html("The temperature will be: " + final + "&#176");
            $("#formtwo").html("The cloud coverage will be: " + result.weather[0].description);
            $("#formthree").html("The wind will be: " + result.wind.speed + " mph");
            console.log(result);
        },

        error: function(error)
        {
            console.log(`Error ${error}`)
        }
    })
});

