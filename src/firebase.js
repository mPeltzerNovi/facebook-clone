import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional -->Nieuwe firebase op 17 mei 21
const firebaseConfig = {
    apiKey: "AIzaSyBy3g_0qHDhgKiiOxDrN9pWUH5iz1LF5tU",
    authDomain: "forfacebookclone.firebaseapp.com",
    projectId: "forfacebookclone",
    storageBucket: "forfacebookclone.appspot.com",
    messagingSenderId: "1052355314814",
    appId: "1:1052355314814:web:fbce5f2f68e83eb63f442f",
    measurementId: "G-N0S0T11Y88"
};

//connect react frondend to firebase backend:
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting acces to the database:
const db = firebaseApp.firestore();

//auth deel even mee-tikken, niet gebruiken:
//const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

//export { auth, provider };
export default db;
