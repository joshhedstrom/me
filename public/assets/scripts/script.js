$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDARFh3ZZvJnPFsvZKdBvBfz58wGwoqBtY",
    authDomain: "personalsite-55c4a.firebaseapp.com",
    databaseURL: "https://personalsite-55c4a.firebaseio.com",
    projectId: "personalsite-55c4a",
    storageBucket: "personalsite-55c4a.appspot.com",
    messagingSenderId: "659724012306"
};
firebase.initializeApp(config);