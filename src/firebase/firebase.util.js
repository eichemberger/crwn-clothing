import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZ7YC33-6FLHALpbn0fXEgfnHcFVbDZn4',
  authDomain: 'crwn-db-65685.firebaseapp.com',
  projectId: 'crwn-db-65685',
  storageBucket: 'crwn-db-65685.appspot.com',
  messagingSenderId: '439061309763',
  appId: '1:439061309763:web:e99a2be3ca5fae3867a7f6',
  measurementId: 'G-QRJJ77KBZ6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
