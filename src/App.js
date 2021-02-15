import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if(clientY =< 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begNotToLeave = () => console.log("plz don't leave");
  useBeforeLeave(begNotToLeave);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
