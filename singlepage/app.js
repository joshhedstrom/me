$(document).ready(function() {
	$('.parallax').parallax();
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
     $('.modal').modal({
        dismissible: false
    });

    const config = {
        apiKey: "AIzaSyDARFh3ZZvJnPFsvZKdBvBfz58wGwoqBtY",
        authDomain: "personalsite-55c4a.firebaseapp.com",
        databaseURL: "https://personalsite-55c4a.firebaseio.com",
        projectId: "personalsite-55c4a",
        storageBucket: "personalsite-55c4a.appspot.com",
        messagingSenderId: "659724012306"
    };
    firebase.initializeApp(config);

    const database = firebase.database()


    $('#customerSubmit').click((event) => {
        event.preventDefault();
        if ($('#customerName') !== null && $('#customerNumber') !== null && $('#customerEmail') !== null && $('#customerMessage') !== null) {
            let name = $('#customerName').val().trim();
            let number = $('#customerNumber').val().trim();
            let email = $('#customerEmail').val().trim();
            let message = $('#customerMessage').val().trim();

            saveMessage(name, number, email, message);
            $('#confirmModal').modal('open');
        }
    });

    function saveMessage(name, number, email, message) {
        database.ref().push({
            name: name,
            number: number,
            email: email,
            message: message,
        })
    }

});