// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyA8M0bAnvNb04xF7Ll9_XHeABJyhm_N3D0",
//     authDomain: "pwa-test-2f0e9.firebaseapp.com",
//     projectId: "pwa-test-2f0e9",
//     storageBucket: "pwa-test-2f0e9.firebasestorage.app",
//     messagingSenderId: "70651643364",
//     appId: "1:70651643364:web:a830d4b946db1ab76733f1"
// };

// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// export const requestNotificationPermission = async () => {
//   console.log("Requesting notification permission...");

//   const permission = await Notification.requestPermission();
//   if (permission === "granted") {
//     console.log("Notification permission granted.");

//     try {
//       const token = await getToken(messaging, {
//         vapidKey: "BGfychJwUxBzyNgE64tE4CxLhQjRFalM4dc3INIjWE2JlCjSfFTFP4h5ZCttZ_AyESF1SMyYU5LmhoLkxyOvoY4",
//       });

//       if (token) {
//         console.log("FCM Token:", token);
//       } else {
//         console.log("No registration token available.");
//       }
//     } catch (error) {
//       console.error("Error getting token:", error);
//     }
//   } else {
//     console.log("Notification permission denied.");
//   }
// };