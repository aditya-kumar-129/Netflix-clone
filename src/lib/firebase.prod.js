import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBuwkeCHFxpnIQwnAgPuAnqIuupf9gTVgw",
  authDomain: "netflix-clone-d6c77.firebaseapp.com",
  projectId: "netflix-clone-d6c77",
  storageBucket: "netflix-clone-d6c77.appspot.com",
  messagingSenderId: "82368354989",
  appId: "1:82368354989:web:66f836796c5bfa8bf2c424",
  measurementId: "G-K5G06JJPLL",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
