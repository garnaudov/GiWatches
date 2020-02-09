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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //need to assure that we get a valid object

  //A queryReference obj represents the "current" place in the DB that we are querying
  //doesnt have the actual data of the collection or document

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //documentRef - use it to perform CRUD

  //documentRef - returns documentSnapshot object
  //collectionRef - returns querySnapshot object

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("An error occured while creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    //snapshot.docs - array of collection items
    //snapshot.docs[0].data() - we can get title and items
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
