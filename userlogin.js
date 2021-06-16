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

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');


btnLogin.addEventListener('click', e =>
{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);

    //if they are logging in and there is an error, that means one of two things
    //1. they logged in without an account, or 2. they entered the wrong password
    //I couldn't find a way to distinguish between the two, so this error message covers both

    promise.catch(e => 
        document.getElementById("log").innerHTML = "Oops! An error occurred.");
        document.getElementById("help").className = "text";
        document.getElementById("help").innerHTML = "It looks like you either tried to login without an account, or entered the wrong password.";
        document.getElementById("help2").className = "text";
        document.getElementById("help2").innerHTML = "Try signing up with a new account, or logging in again.";
    });

btnSignUp.addEventListener('click', e =>
{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);

    //error message for signing up with an account that has already been created
    promise.catch(e => 
        document.getElementById("log").innerHTML = "Oops! An error occurred.");
        document.getElementById("help").className = "text";
        document.getElementById("help").innerHTML = "An account has already been created with this email.";
        document.getElementById("help2").className = "text";
        document.getElementById("help2").innerHTML = "Create a new account, or login with an existing one.";
    });

btnLogout.addEventListener('click', e => 
{
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser =>
    {
        if(firebaseUser)
        {
            console.log("logged in");
            document.getElementById("log").innerHTML = "You are logged in!";
            document.getElementById("help").className = "text_hide";
            document.getElementById("help2").className = "text_hide";


            //display correct buttons
            document.getElementById("btnLogin").className = "button_hide";
            document.getElementById("btnSignUp").className = "button_hide";
            document.getElementById("btnLogout").className = "button";
            document.getElementById("begin").className = "button";

        }

        else
        {
            console.log("logged out");
            document.getElementById("log").innerHTML = "Login to begin racing";

            //make label visible and display helping text
            document.getElementById("help").className = "text";
            document.getElementById("help").innerHTML = "(6+ characters for password)";


            //display correct buttons
            document.getElementById("btnLogin").className = "button";
            document.getElementById("btnSignUp").className = "button";
            document.getElementById("btnLogout").className = "button_hide";
            document.getElementById("begin").className = "button_hide";

        }

    });