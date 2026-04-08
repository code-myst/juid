(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDxJSBLbuunfTF7gbkNL2g8-fNXdsIejFI",
    authDomain: "jamiatululoomilislamiadhaka.firebaseapp.com",
    projectId: "jamiatululoomilislamiadhaka",
    storageBucket: "jamiatululoomilislamiadhaka.firebasestorage.app",
    messagingSenderId: "172395531641",
    appId: "1:172395531641:web:27e451c2700a9f3debb3a8",
    measurementId: "G-YDG45LK4C6"
  };

  window.JUID_FIREBASE_CONFIG = firebaseConfig;

  window.initJuidFirebase = function initJuidFirebase() {
    if (!window.firebase) {
      throw new Error("Firebase SDK is not loaded.");
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    return firebase.app();
  };
})();
