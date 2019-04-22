import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAi7dfyIeH6CzWFO41BW9g_m5WpXtjCrR8",
    authDomain: "pm-app-64ce6.firebaseapp.com",
    databaseURL: "https://pm-app-64ce6.firebaseio.com",
    projectId: "pm-app-64ce6",
    storageBucket: "pm-app-64ce6.appspot.com",
    messagingSenderId: "569903972144"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true}); 

  export default firebase; 