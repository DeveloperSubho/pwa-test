import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { messaging, getToken } from "./firebase-config";

const isLocalhost = window.location.hostname === "localhost";
const swPath = isLocalhost
  ? "/firebase-messaging-sw.js"
  : "/pwa-test/firebase-messaging-sw.js"; // Change "pwa-test" to your GitHub Pages repo name


// Register service worker for PWA
serviceWorkerRegistration.register();

// Request notification permission and get FCM token
const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "BGfychJwUxBzyNgE64tE4CxLhQjRFalM4dc3INIjWE2JlCjSfFTFP4h5ZCttZ_AyESF1SMyYU5LmhoLkxyOvoY4",
    });
    console.log("FCM Token:", token);
  } else {
    console.warn("Permission not granted for notifications");
  }
};

// Call the function on page load
requestNotificationPermission();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

navigator.serviceWorker
  .register(`${process.env.PUBLIC_URL}`+swPath)
  .then((registration) => {
    console.log("Service Worker registered:", registration);
  })
  .catch((err) => console.error("Service Worker registration failed:", err));
