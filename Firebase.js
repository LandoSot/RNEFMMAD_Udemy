import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAd5yUncOVeZutVJdfq2Qy4gmZNI7TUUks",
  authDomain: "rnefmmad-udmy.firebaseapp.com",
  projectId: "rnefmmad-udmy",
  storageBucket: "rnefmmad-udmy.appspot.com",
  messagingSenderId: "211509257841",
  appId: "1:211509257841:web:c3dacd289a0b53b60c1dd0",
  measurementId: "G-DMXYZ8JBFG"
};

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore()
const auth = firebase.auth()
//const createUserEmail = createUserWithEmailAndPassword(app)

export { auth, db }
