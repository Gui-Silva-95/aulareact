import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAnpuqSAD9BJQsqaPQETJTGYJFdHPDzcRU",
    authDomain: "etec-58fd8.firebaseapp.com",
    databaseURL: "https://etec-58fd8-default-rtdb.firebaseio.com",
    projectId: "etec-58fd8",
    storageBucket: "etec-58fd8.appspot.com",
    messagingSenderId: "634902823861",
    appId: "1:634902823861:web:a976c63b468f6ecd198ffc",
    measurementId: "G-H6MQQSRFS4"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
