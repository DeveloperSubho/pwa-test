import React, { useEffect } from "react";
import { messaging, onMessage } from "./firebase-config";

function App() {
  useEffect(() => {
    // Listen for foreground messages
    onMessage(messaging, (payload) => {
      console.log("Foreground message received:", payload);
      alert(`Notification: ${payload.notification.title} - ${payload.notification.body}`);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>React PWA with Firebase Push Notifications</h1>
      <p>You will receive push notifications when they are sent.</p>
    </div>
  );
}

export default App;