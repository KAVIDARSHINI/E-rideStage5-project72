import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCvHmffJmd5pRb_-9aXoiCL9FTauoWaOs0",
  authDomain: "e-ride-project-a2eec.firebaseapp.com",
  projectId: "e-ride-project-a2eec",
  storageBucket: "e-ride-project-a2eec.appspot.com",
  messagingSenderId: "741563338426",
  appId: "1:741563338426:web:a5403ee15418bdcccfbc83"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
