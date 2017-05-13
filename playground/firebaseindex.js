import firebase from 'firebase';

// Initialize Firebase
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
    name: 'TodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Lauren',
    age: 24
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// })

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Max'
// });

firebaseRef.child('app').update({ name: 'Todo Application' });
firebaseRef.child('user').update({ name: 'Joe' });
