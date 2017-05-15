import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDSwz_BZjWf7VU7IKA2qunDwSMD-SFA8UA",
    authDomain: "todo-app-b04bf.firebaseapp.com",
    databaseURL: "https://todo-app-b04bf.firebaseio.com",
    projectId: "todo-app-b04bf",
    storageBucket: "todo-app-b04bf.appspot.com",
    messagingSenderId: "699432621345"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
