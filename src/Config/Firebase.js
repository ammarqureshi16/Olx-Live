import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAoogfAPcEgD3ebRoXXMkWcfXTGewCxG5E",
    authDomain: "live-olx.firebaseapp.com",
    projectId: "live-olx",
    storageBucket: "live-olx.appspot.com",
    messagingSenderId: "1048928045891",
    appId: "1:1048928045891:web:81577fda6e8248c95e7df6",
    measurementId: "G-DVM9M43SHN"
  };


//   Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const auth=firebase.auth();










// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script> */}

// <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
{/* <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-analytics.js"></script> */}

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  