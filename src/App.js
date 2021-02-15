import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
function App() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div className="App"></div>;
}

export default App;
