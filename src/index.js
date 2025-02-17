import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { messaging, getToken } from "./firebase-config";

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