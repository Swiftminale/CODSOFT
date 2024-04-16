import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoSXSPc1qALbYmu--0bbJamtRmEJOHESw",
    authDomain: "todoapp-f5936.firebaseapp.com",
    projectId: "todoapp-f5936",
    storageBucket: "todoapp-f5936.appspot.com",
    messagingSenderId: "282607310034",
    appId: "1:282607310034:web:62f14d7ac58d049710490b"
};
if (!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }


export { firebase };
