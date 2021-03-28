import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuZvdpPxIcCeCa7YA_ev9PS2X1wB9nXhg",
  authDomain: "linkedin-redux.firebaseapp.com",
  projectId: "linkedin-redux",
  storageBucket: "linkedin-redux.appspot.com",
  messagingSenderId: "341023511216",
  appId: "1:341023511216:web:cf002c7bdceb85b2a16175",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
