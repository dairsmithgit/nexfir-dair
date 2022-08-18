import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDthiTOdY8cetWhzYCwWqULumvIIXBQ2VY",
    authDomain: "nexfir-dair.firebaseapp.com",
    projectId: "nexfir-dair",
    storageBucket: "nexfir-dair.appspot.com",
    messagingSenderId: "788542119647",
    appId: "1:788542119647:web:24ee71ff4b08809a89536a"
}

export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();