import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCveIqPAyipLfhedmwCFm5lQx8N_McEAAk",
    authDomain: "react-app-cursos-bf25e.firebaseapp.com",
    projectId: "react-app-cursos-bf25e",
    storageBucket: "react-app-cursos-bf25e.appspot.com",
    messagingSenderId: "400509985807",
    appId: "1:400509985807:web:32ab76ba85a6eddd32af7a"
  };

  const firebaseConfigTesting = {
    apiKey: "AIzaSyCMvEbVE-aKX92AgV4hFUKn3wVNjc628dU",
    authDomain: "redux-demo-67598.firebaseapp.com",
    projectId: "redux-demo-67598",
    storageBucket: "redux-demo-67598.appspot.com",
    messagingSenderId: "310585835824",
    appId: "1:310585835824:web:09362557e41b9a979708f5",
    measurementId: "G-7M6QT10YSK"
  };




// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASEURL,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_APPID,
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//     authDomain: "push-one-signal-17ede.firebaseapp.com",
//     databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//     projectId: "push-one-signal-17ede",
//     storageBucket: "push-one-signal-17ede.appspot.com",
//     messagingSenderId: "803724161810",
//     appId: "1:803724161810:web:02f32ebc98a71e376339cb"
//   };


if( process.env.NODE_ENV === 'test' ) {
    // testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    //dev/prod
firebase.initializeApp(firebaseConfig);
}
    
// firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}