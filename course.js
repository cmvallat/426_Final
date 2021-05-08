
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
            //console.log("before function" + State)
            State = value;
            //console.log("after function" + State);
            $("#st").html(State.toUpperCase());
        }
    };
    getState();
    //console.log("out of loop" + State);


        //PSEUDOCODE: 
        //Run through each document in the States collection (aka all the states)
        //Get the fields of the state's name and corresponding course location
        //find the state that matches to user needs, and then match with course location array

        db = firebase.firestore();
        //var city = await db.collection("States").get();
        //var query = city.where("Name", "==", "Montana");
        //console.log(city);


        
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
                        //console.log("TEST LAT" + latitude);
                        //console.log("TEST LONG" + longitude);
                        STATES[i] = statename;
                        COURSES[i] = course;
                        LAT[i] = latitude;
                        LONG[i] = longitude;
                    });
                //});
        }

        matchStates().then((value) =>
        {
            console.log("lat array:")
            console.log(LAT);
            console.log("long array:")
            console.log(LONG);
            console.log("States array:")
            console.log(STATES);
            console.log("Courses array:")
            console.log(COURSES);
            
            for(var z = 0; z < 50; z++)
            {
                if(STATES[z] == State)
                {
                    console.log("State is: " + STATES[z]);
                    $("#st").html(STATES[z].toUpperCase());
                    console.log("Course is: " + COURSES[z]);
                    $("#crse").html(COURSES[z].toUpperCase());
                    lati = LAT[z];
                    longi = LONG[z];
                    //var link = "https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCGRpqvx7p2BirqPpxHjytmDFFCpAGm6lI&location=30.5863028,-95.3552942";
                    //$("#MAP").attr('src', link)
                    //window.location.reload();
                    //window.location.reload();
                    console.log("in func lat is: " + lati);
                    console.log("in func long is: " + longi);
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
                var final = Math.floor(F);

                //display weather data in designated headers
                $("#formone").html("The temperature will be: " + final + "&#176");
                $("#formtwo").html("The cloud coverage will be: " + result.weather[0].description);
                $("#formthree").html("The wind will be: " + result.wind.speed + " mph");
                console.log(result.name);
            },

            error: function(error)
            {
                console.log(`Error ${error}`)
            }
        })     
        /*
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
                $("#dist").html("(" + dis + " meters away.)")
                //console.log(response.results[0].name);
                console.log(response.results[0].distance);
            }
        });
        */
                }
            }
           
            
            
        });
        //matchStates();
        console.log("out of func lat: " + lati);
        console.log("out of func long: " + longi);
        

    
    //FINDING THE NEAREST HOSPITAL VIA TRUE WAY PLACES API - ATTEMPT AT API 20 POINTS
    /*
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
    */
   //window.location.reload();