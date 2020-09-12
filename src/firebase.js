import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDRNKuzlPwZYpwfPr0ojCwP6-_435BNggs",
  authDomain: "clone-46a06.firebaseapp.com",
  databaseURL: "https://clone-46a06.firebaseio.com",
  projectId: "clone-46a06",
  storageBucket: "clone-46a06.appspot.com",
  messagingSenderId: "441509692301",
  appId: "1:441509692301:web:04ad2f3c3bfd28a22473c4",
  measurementId: "G-4Z6W8CXZ24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };