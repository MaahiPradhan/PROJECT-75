import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDpj1YqvRVRESh42Eo4Dz0eGHnUWoA1xis",
  authDomain: "e-ride-11c8a.firebaseapp.com",
  projectId: "e-ride-11c8a",
  storageBucket: "e-ride-11c8a.appspot.com",
  messagingSenderId: "699069740532",
  appId: "1:699069740532:web:18cd34dee5f53a4d37b5a1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
