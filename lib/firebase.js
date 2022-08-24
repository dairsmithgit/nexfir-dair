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
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// helper functions

/**`
* gets a users/{uid} doc with username
* @param {string} username
*/
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];

    return userDoc;
}

/**`
* converts a firestore doc to json
* @param {DocumentSnapshot} doc
*/
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // firestore timestamp not serializable to json
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    };
}