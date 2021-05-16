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
//var log = false;
//var sign = false;

btnLogin.addEventListener('click', e =>
{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //log = true;
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e =>
{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    //sign = true;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser =>
    {
        if(firebaseUser)
        {
            console.log("logged in!");
            //document.getElementById("#response").html("successfully logged in!");
        }
        else
        {
            console.log("not logged in");
        }
    });