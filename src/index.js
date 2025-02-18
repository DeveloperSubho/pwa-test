// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import { messaging, getToken } from "./firebase-config";

// const isLocalhost = window.location.hostname === "localhost";
// const repoName = "pwa-test"; // Update to match your GitHub repo name

// // Register service worker for PWA
// serviceWorkerRegistration.register();

// // Request notification permission and get FCM token
// const requestNotificationPermission = async () => {
//   const permission = await Notification.requestPermission();
//   if (permission === "granted") {
//     const token = await getToken(messaging, {
//       vapidKey: "BGfychJwUxBzyNgE64tE4CxLhQjRFalM4dc3INIjWE2JlCjSfFTFP4h5ZCttZ_AyESF1SMyYU5LmhoLkxyOvoY4",
//     });
//     console.log("FCM Token:", token);
//   } else {
//     console.warn("Permission not granted for notifications");
//   }
// };

// // Call the function on page load
// requestNotificationPermission();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// navigator.serviceWorker
//   .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`, { scope: isLocalhost ? "/" : `/${repoName}/` })
//   .then((registration) => {
//     console.log("Service Worker registered with scope:", registration.scope);
//   })
//   .catch((err) => console.error("Service Worker registration failed:", err));


// //   navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();