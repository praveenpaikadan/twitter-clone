import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvE3iPhU-PeuxlpYWMglJVwjxl-JedWTs",
  authDomain: "twitter-clone-paikadan.firebaseapp.com",
  databaseURL: "https://twitter-clone-paikadan.firebaseio.com",
  projectId: "twitter-clone-paikadan",
  storageBucket: "twitter-clone-paikadan.appspot.com",
  messagingSenderId: "1081622264128",
  appId: "1:1081622264128:web:fcbdac38910cc828ed62a5",
  measurementId: "G-594T1THHTX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
