
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDp2gAqXczbA0qe4L9Ds2P0Aw0R9F3Ckzs",
      authDomain: "kwitter-e9c58.firebaseapp.com",
      databaseURL: "https://kwitter-e9c58-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9c58",
      storageBucket: "kwitter-e9c58.appspot.com",
      messagingSenderId: "336202538250",
      appId: "1:336202538250:web:aed46ba6386d8a8df66ef3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
