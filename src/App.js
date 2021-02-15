import React, { useEffect, useState, useRef, useCallback } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFullscreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullscreen, exitFullscreen };
};

function App() {
  const onFullscreen = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFullscreen, exitFullscreen } = useFullscreen();
  return (
    <div className="App" style={{ height: "10000vh" }}>
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1612875895771-76bba1a61a49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="image"
        />
        <button onClick={triggerFullscreen}>make fullscreen </button>
        <button onClick={exitFullscreen}>exit fullscreen </button>
      </div>
    </div>
  );
}

export default App;
