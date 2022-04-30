// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIxLrqip_OZCwUo016vxAq8fyTD_DmFg0",
  authDomain: "ecalc-baa63.firebaseapp.com",
  projectId: "ecalc-baa63",
  storageBucket: "ecalc-baa63.appspot.com",
  messagingSenderId: "753808773994",
  appId: "1:753808773994:web:456751cb40717d0d828b13",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
