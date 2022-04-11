import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVOeijJgZb_dEdRdzimAocij-8DpioUGQ",
  authDomain: "musicapp-v1.firebaseapp.com",
  databaseURL: "https://musicapp-v1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "musicapp-v1",
  storageBucket: "musicapp-v1.appspot.com",
  messagingSenderId: "673565277127",
  appId: "1:673565277127:web:cf15561a13259c471d37e2",
  measurementId: "G-NP4N4NT6DM"
})

export const auth = app.auth()
export default app;
