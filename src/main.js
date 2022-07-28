import { createApp } from 'vue'
import App from './App.vue'
import style from './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import router from './router'
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbbEKQk71P7nAsTGc7xaUhfe1ivzhOp7A",
  authDomain: "seventaskmanager.firebaseapp.com",
  projectId: "seventaskmanager",
  storageBucket: "seventaskmanager.appspot.com",
  messagingSenderId: "672526888394",
  appId: "1:672526888394:web:99c0fc043612a7c5763333",
  measurementId: "G-QNFW18GQ6V"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
createApp(App).use(router).use(style).mount('#app')

