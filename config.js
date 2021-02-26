import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
apiKey: "AIzaSyBg7zRVxxQsHBuRd2DzJNRJLIWMzs7395U",
    authDomain: "book-santa-dbe1a.firebaseapp.com",
    projectId: "book-santa-dbe1a",
    storageBucket: "book-santa-dbe1a.appspot.com",
    messagingSenderId: "414791899859",
    appId: "1:414791899859:web:69defe48946b57f19bd226"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();