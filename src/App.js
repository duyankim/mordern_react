import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function App() {
  const deletePost = () => console.log("Deleting post...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deletePost, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete</button>
    </div>
  );
}

export default App;
