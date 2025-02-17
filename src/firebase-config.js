import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA8M0bAnvNb04xF7Ll9_XHeABJyhm_N3D0",
    authDomain: "pwa-test-2f0e9.firebaseapp.com",
    projectId: "pwa-test-2f0e9",
    storageBucket: "pwa-test-2f0e9.firebasestorage.app",
    messagingSenderId: "70651643364",
    appId: "1:70651643364:web:a830d4b946db1ab76733f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };

navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
