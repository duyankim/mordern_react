import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotification("may I help you?", "description");
  return (
    <div className="App" style={{ height: "10000vh" }}>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
}

export default App;
