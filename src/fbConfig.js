import firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyA53SDIdkuGwO6dLhl6ouw3JvVB2ZeTMwg",
  authDomain: "zombackend.firebaseapp.com",
  databaseURL: "https://zombackend.firebaseio.com",
  projectId: "zombackend",
  storageBucket: "zombackend.appspot.com",
  messagingSenderId: "569256645803"
};

firebase.initializeApp(config);

var fb = firebase.database();

export default fb;
