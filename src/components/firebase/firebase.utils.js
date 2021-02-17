import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAubddW_563pt6mojbAR0I5p67r_Ob7ZhQ",
    authDomain: "slay-with-style.firebaseapp.com",
    projectId: "slay-with-style",
    storageBucket: "slay-with-style.appspot.com",
    messagingSenderId: "142307517920",
    appId: "1:142307517920:web:318d7889603abf3ab33785",
    measurementId: "G-S8DBQ1BWY0"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;