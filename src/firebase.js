// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyArJ8HbLLlZoCqRvg2uoe6aw6q77xOtKio",
    authDomain: "netflix-clone-redux-94cf3.firebaseapp.com",
    projectId: "netflix-clone-redux-94cf3",
    storageBucket: "netflix-clone-redux-94cf3.appspot.com",
    messagingSenderId: "1073674410034",
    appId: "1:1073674410034:web:0886ada4be3459fa26442b",
    measurementId: "G-6DKEEFMNDE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;