go to firebase.google.com
- go to the console
- welcome to firebase
- create a new project
- project name - FireBase-intro
- create project

--> overview icon
--> set a web app

users-> register app
--> first script tag on the 

add this to head -->

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js"></script>


add this to body - at the end
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.22.1/firebase-analytics.js"></script>

- proiectul este identificat de credentialele pe care le vedem aici
<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDSQh_jYYaca8vLROZvtLSKQ4Lzm3O86bE",
    authDomain: "fir-intro-9994e.firebaseapp.com",
    databaseURL: "https://fir-intro-9994e.firebaseio.com",
    projectId: "fir-intro-9994e",
    storageBucket: "fir-intro-9994e.appspot.com",
    messagingSenderId: "639352817122",
    appId: "1:639352817122:web:9294a35eb113eadcada5bb",
    measurementId: "G-7ZS5QZD531"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

-- informatii despre cum ne autentificam cu firebase
-- in the script tag console.log firebase in order to set that the firebase is in place
-- real time database --> 

var database = firebase.database();
the database is accessed like a reference
user -> unique id

- un project este un container pentru hosting in google cloud platform
- data base, file storage, ...
- pro

1.npm install firebase-tools -g
2. firebase in