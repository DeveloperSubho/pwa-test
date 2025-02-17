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

// Register the service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

// Get FCM Token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: "BGfychJwUxBzyNgE64tE4CxLhQjRFalM4dc3INIjWE2JlCjSfFTFP4h5ZCttZ_AyESF1SMyYU5LmhoLkxyOvoY4" });
      console.log("FCM Token:", token);
    } else {
      console.warn("Permission not granted for notifications");
    }
  } catch (error) {
    console.error("Error getting notification permission:", error);
  }
};

// Listen for foreground messages
onMessage(messaging, (payload) => {
  console.log("Message received in foreground:", payload);
});