import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJSBLbuunfTF7gbkNL2g8-fNXdsIejFI",
  authDomain: "jamiatululoomilislamiadhaka.firebaseapp.com",
  projectId: "jamiatululoomilislamiadhaka",
  storageBucket: "jamiatululoomilislamiadhaka.firebasestorage.app",
  messagingSenderId: "172395531641",
  appId: "1:172395531641:web:27e451c2700a9f3debb3a8",
  measurementId: "G-YDG45LK4C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
