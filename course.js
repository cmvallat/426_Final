//import { each } from "jquery";

var paramsString = window.location.search;
var searchParams = new URLSearchParams(paramsString);
var State = "";
var CourseName;
var Lat;
var Long;

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
    }
    $("#st").html(State.toUpperCase());
    $("#crse").html("FUNCTION RAN");
});

$(function getCourse()
{
    //PSEUDOCODE: 
    //Run through each document in the Regions collection (aka all the regions)
    //Run through each collection in each document (aka all the states)
    //find the state that matches, and then get the course location and name
    db = firebase.firestore();
    //console.log("db: ");
    //console.log(db);
    //var docRef = db.collection("Regions").doc("Mountain");
    //var test = docRef.get();
    //console.log("docRef: ");
    //console.log(docRef);
    //var i = 0;
    db.collection("Regions").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
    
    //var docRef = db.collection("Regions").doc("Mountain");
    //console.log(docRef);
    //admin.firestore().collection('drinks').orderBy('createdAt', 'desc').get()
    /*
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    */
    //var states_list = db.collection("Regions").document
    /*foreach(region in db.collection("Regions"))
    {
        i++;
        console.log(i);
    }
    */
    
    //console.log(db);

    //Lat = firebase.firestore().collections("Regions")
});

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