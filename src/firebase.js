import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8w0GyUcMLbO1jxpvrxV6lcgSCkV730ns",
  authDomain: "clone-befb5.firebaseapp.com",
  databaseURL: "https://clone-befb5.firebaseio.com",
  projectId: "clone-befb5",
  storageBucket: "clone-befb5.appspot.com",
  messagingSenderId: "380738090187",
  appId: "1:380738090187:web:0cde89e71e40771003574e",
  measurementId: "G-53292E0ZW5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
