import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCcWcPv4T5JkOoyBC3RTbKEQPA1F2LjMwk",
    authDomain: "dashboad-mario.firebaseapp.com",
    projectId: "dashboad-mario",
    storageBucket: "dashboad-mario.appspot.com",
    messagingSenderId: "591002841089",
    appId: "1:591002841089:web:0b40b5f8a58cc349339000",
    measurementId: "G-T38YJF7EGM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;