import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyD-g0VQgInl9E4W38cuNC9d8ffq5HjMIu4",
     authDomain: "todoapp-430f4.firebaseapp.com",
     databaseURL: "https://todoapp-430f4.firebaseio.com",
     projectId: "todoapp-430f4",
     storageBucket: "todoapp-430f4.appspot.com",
     messagingSenderId: "383566882126"
   };
   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
