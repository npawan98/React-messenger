//this is a firebase config file we have created.
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATwVprCtNMMMe91YK21OWP7GfP-x7etX4",
    authDomain: "messenger-6f9c0.firebaseapp.com",
    databaseURL: "https://messenger-6f9c0.firebaseio.com",
    projectId: "messenger-6f9c0",
    storageBucket: "messenger-6f9c0.appspot.com",
    messagingSenderId: "846148219478",
    appId: "1:846148219478:web:0eed95c05a3c211235c1f7",
    measurementId: "G-VZ9VKRBNSM"
});

const db = firebaseApp.firestore();

// export { db }; or we can use it as below

export default db;