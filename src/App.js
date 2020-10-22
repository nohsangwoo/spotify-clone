import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromResponse } from "./spotify";
function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token >>>", token);
  }, [token]);
  return (
    // BEM
    <div className="App">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
