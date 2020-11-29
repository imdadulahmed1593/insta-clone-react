import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKEhq43H0pEV_zcBFjqwEFMSpVxJD_zIc",
  authDomain: "instagram-clone-react-c10d0.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-c10d0.firebaseio.com",
  projectId: "instagram-clone-react-c10d0",
  storageBucket: "instagram-clone-react-c10d0.appspot.com",
  messagingSenderId: "784493726566",
  appId: "1:784493726566:web:b43e789602fcb80f2ad6a7",
  measurementId: "G-QELV2MYCSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
