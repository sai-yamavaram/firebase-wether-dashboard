import firebase from 'firebase'
import firebaseConfig from "./config";


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase