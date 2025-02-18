// importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyA8M0bAnvNb04xF7Ll9_XHeABJyhm_N3D0",
//     authDomain: "pwa-test-2f0e9.firebaseapp.com",
//     projectId: "pwa-test-2f0e9",
//     storageBucket: "pwa-test-2f0e9.firebasestorage.app",
//     messagingSenderId: "70651643364",
//     appId: "1:70651643364:web:a830d4b946db1ab76733f1"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// // Handle background notifications
// messaging.onBackgroundMessage((payload) => {
//   console.log("Received background message:", payload);
//   self.registration.showNotification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: "/icon.png",
//   });
// });