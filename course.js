//import { each } from "jquery";

var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);
var State = "";
var Regions = [];
var loc = "";
var Lat = 5;
var Long = 7;

var firebaseConfig = {
    apiKey: "AIzaSyAogoNhW6Xviae9I5KweXYgnKa8Ng0WrO8",
    authDomain: "xcsimulator.firebaseapp.com",
    databaseURL: "https://xcsimulator-default-rtdb.firebaseio.com",
    projectId: "xcsimulator",
    storageBucket: "xcsimulator.appspot.com",
    messagingSenderId: "1043486474965",
    appId: "1:1043486474965:web:132d74a95e1192bad4985c",
    measurementId: "G-TSC41N7LVX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

$(function getState()
{
    for(var value of searchParams.values()) 
    {
        State = value;
        $("#st").html(State.toUpperCase());
    }
    
});


    //PSEUDOCODE: 
    //Run through each document in the Regions collection (aka all the regions)
    //Run through each collection in each document (aka all the states)
    //find the state that matches, and then get the course location and name

    db = firebase.firestore();
    
    /*
    const matchStates = async () => 
    {
        var sexy = db.collection("States");
        var gay = sexy.get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    var statename = await doc.data().Name;
                    var course = await doc.data().Course;
                    if(State.localeCompare(statename))
                    {
                        //console.log("runs");
                       $("#st").html(State.toUpperCase());
                       $("#crse").html(course.toUpperCase());
                    }
                    console.log(doc.id, '=>', doc.data());
                });
            });
    }
    */

    //matchStates();
    /*
    //get all regions and loop through
    ("States").get().then((querySnapshot) =>
    {
        //START REGION LOOP
        querySnapshot.forEach((doc) => 
        {
            var statename = doc.data().Name;
            var course = doc.data().Course;
            //START STATES LOOP
            if(State.localeCompare(statename))
             {
                 //console.log("runs");
                $("#st").html(State.toUpperCase());
                //$("#crse").html(course.toUpperCase());
             }
        });
            //STATE LOOP ENDS HERE
    });
    */

    //console.log(db.collection("States").where("Name", "==", State));
        //REGION LOOP ENDS HERE




$(function()
{
    console.log("FUNCTION CALLED !");
    //CALLING A WEATHER API FROM FREE CODE CAMP - MY ATTEMPT AT 20 API POINTS
    // in case of fixing issue, use 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=40.5863028,-75.3552942&radius=50&type=hospital'
    var lat = 40.5863028;
    var long = -75.3552942;
    console.log("LAT= " + Lat);
    console.log("LONG =" + Long);
    const URL = 'https://fcc-weather-api.glitch.me/api/current?lat=' + Lat + '&lon=' + Long
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

//FINDING THE NEAREST HOSPITAL VIA TRUE WAY PLACES API - ATTEMPT AT API 20 POINTS
const hospitalURL = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=37.783366%2C-122.402325&language=en&radius=5000&type=hospital';
$.ajax(
    {
        "async": true,
        "crossDomain": true,
        "url": hospitalURL,
        "method": "GET",
        "headers":
        {
            "x-rapidapi-key": "b82792d8aamshc3fc540ba91e06fp174444jsn4cb1b132bb2a",
            "x-rapidapi-host": "trueway-places.p.rapidapi.com"
        },
        success: function(response)
        {
            var hop = response.results[0].name;
            $("#nearest").html(hop.toUpperCase());
            var dis = response.results[0].distance;
            $("#dist").html("(" + dis + " meters away.)")
            //console.log(response.results[0].name);
            console.log(response.results[0].distance);
        }
    });
    