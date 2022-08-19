 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBOI-JrIr7I8-LwSDXFb2_U0zrIsSg-3Ks",
   authDomain: "jjgtiendatcc.firebaseapp.com",
   projectId: "jjgtiendatcc",
   storageBucket: "jjgtiendatcc.appspot.com",
   messagingSenderId: "904082245432",
   appId: "1:904082245432:web:41098385fe82e0b74063cd",
   measurementId: "G-C6HM16PTW1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 console.log("hola")