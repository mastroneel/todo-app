import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD_9fsTH8TiSdhYGD_4mzGbzwDxA7vW5w0",
  authDomain: "mead-todo-app-23821.firebaseapp.com",
  databaseURL: "https://mead-todo-app-23821.firebaseio.com",
  storageBucket: "mead-todo-app-23821.appspot.com",
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

firebaseRef.update({
  isRunning: null
});
firebaseRef.child('user/age').remove();
