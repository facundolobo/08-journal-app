import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCveIqPAyipLfhedmwCFm5lQx8N_McEAAk",
    authDomain: "react-app-cursos-bf25e.firebaseapp.com",
    projectId: "react-app-cursos-bf25e",
    storageBucket: "react-app-cursos-bf25e.appspot.com",
    messagingSenderId: "400509985807",
    appId: "1:400509985807:web:32ab76ba85a6eddd32af7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }