
    var paramsString = window.location.search;
    var searchParams = new URLSearchParams(paramsString);
        
    var i = 0;
    var STATES = [];
    var COURSES = [];  
    var State = "lol";
    var LAT = [];
    var LONG = [];
    var lati = 5;
    var longi = 7;
    var region = "north";
    var REG = [];

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

    //get the State the user selected from the previous html page
    const getState = () =>
    {
        for(var value of searchParams.values()) 
        {
            State = value;
        }
    };
    getState();

        db = firebase.firestore();

        //PSEUDOCODE: 
        //Run through each document in the States collection (aka all the states)
        //Get the fields of the state's name and corresponding course location
        //find the state that matches to user needs, and then match with course location array

        const matchStates = async () => 
        {
            var statename = [];
            var course = [];
            var sexy = await db.collection("States").get();
            sexy.forEach(doc => 
                {
                        i++;
                        statename = doc.data().Name;
                        course =  doc.data().Course;
                        latitude = doc.data().Lat;
                        longitude = doc.data().Long;
                        region = doc.data().Region;
                        STATES[i] = statename;
                        COURSES[i] = course;
                        LAT[i] = latitude;
                        LONG[i] = longitude;
                        REG[i] = region;
                    });
        }

        matchStates().then((value) =>
        {
            for(var z = 0; z < 50; z++)
            {
                if(STATES[z] == State)
                {
                    $("#st").html(STATES[z].toUpperCase() + ",");
                    $("#crse").html(COURSES[z].toUpperCase());
                    $("#reg").html(REG[z].toUpperCase());

                    //tried to get the google maps to respond to change in state - couldn't work
                    $("MAP").attr("src", "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=30.5863028,-65.3552942");
                    lati = LAT[z];
                    longi = LONG[z];
                   
                    //CALLING FREE CODE CAMP WEATHER API TO GET REGIONAL WEATHER - API 20 POINT ATTEMPT
                    const URL = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lati + '&lon=' + longi
        $.ajax(
        {
            url: URL,
            type: "GET",
            success: function(result)
            {
                //convert to farenheit cause we love america
                var CtoF = 9 / 5;
                var F = ((result.main.temp * CtoF) + 32);
                var final = Math.round(F);
                var ic = result.weather[0].icon;

                //display weather data in designated headers
                $("#formone").html("Temperature: " + final + "&#176");
                $("#formtwo").html("Clouds/Precipitation: " + result.weather[0].description);
                $("#formthree").html("Wind Speed: " + result.wind.speed + " mph");

                //choose icon based on condition code (according to API documentation)

                //200 codes: thunderstorm
                if(result.weather[0].id >= 200 && result.weather[0].id < 300)
                {
                    $("#icon").attr('src', 'images/thunderstormpng.png');
                }
                //300 codes: drizzle
                if(result.weather[0].id >= 300 && result.weather[0].id < 400)
                {
                    $("#icon").attr('src', 'images/drizzlepng.png');
                }
                //500 codes: rain
                if(result.weather[0].id >= 500 && result.weather[0].id < 600)
                {
                    $("#icon").attr('src', 'images/rainpng.png');
                }
                //600 codes: snow
                if(result.weather[0].id >= 600 && result.weather[0].id < 700)
                {
                    $("#icon").attr('src', 'images/snowpng.png');
                }
                //800 code: clear sky
                //801 code: few clouds
                if(result.weather[0].id == 800 || result.weather[0].id == 801)
                {
                    $("#icon").attr('src', 'images/sunpng.png');
                }
                //802 code: scattered clouds
                //803 code: broken clouds
                if(result.weather[0].id == 802 || result.weather[0].id == 803)
                {
                    $("#icon").attr('src', 'images/brokenscatteredpng.png');
                }
                //804 code: overcast
                if(result.weather[0].id == 804)
                {
                    $("#icon").attr('src', 'images/overcastpng.png');
                }
            },

            error: function(error)
            {
                console.log(`Error ${error}`)
            }
        })     
        
        //CALLING TRUE WAY PLACES API TO GET NEAREST HOSPITAL - API 20 POINT ATTEMPT
        const hospitalURL = 'https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=' + lati + '%2C' + longi + '&language=en&radius=5000&type=hospital';
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
                $("#dist").html("(" + dis + " meters away)")
            }
        });
                }
            }
           
        });
        matchStates();
