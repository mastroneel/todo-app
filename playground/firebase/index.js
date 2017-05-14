import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyD-g0VQgInl9E4W38cuNC9d8ffq5HjMIu4",
   authDomain: "todoapp-430f4.firebaseapp.com",
   databaseURL: "https://todoapp-430f4.firebaseio.com",
   projectId: "todoapp-430f4",
   storageBucket: "todoapp-430f4.appspot.com",
   messagingSenderId: "383566882126"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});
