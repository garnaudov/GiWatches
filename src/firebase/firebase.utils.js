import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOG1bhzhkLJt6G-P4h3UCSYXOIMxmPAOg",
  authDomain: "gwatches-4fb19.firebaseapp.com",
  databaseURL: "https://gwatches-4fb19.firebaseio.com",
  projectId: "gwatches-4fb19",
  storageBucket: "gwatches-4fb19.appspot.com",
  messagingSenderId: "769604574269",
  appId: "1:769604574269:web:d1e129b506f5cf2f6d5e54"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
