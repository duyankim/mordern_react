import React from "react";
import useAxios from "./hooks/useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: `${url}`
  });
  console.log(
    `loading: ${loading}\n data:${JSON.stringify(data)} \n error: ${error}`
  );
  return (
    <div className="App" style={{ height: "10000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
