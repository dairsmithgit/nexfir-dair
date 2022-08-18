import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDthiTOdY8cetWhzYCwWqULumvIIXBQ2VY",
    authDomain: "nexfir-dair.firebaseapp.com",
    projectId: "nexfir-dair",
    storageBucket: "nexfir-dair.appspot.com",
    messagingSenderId: "788542119647",
    appId: "1:788542119647:web:24ee71ff4b08809a89536a"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();