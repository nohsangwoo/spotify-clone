import React from "react";
import "./Login.css";
import spotify_Logo from "./img/spotify_logo.jpg";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img src={spotify_Logo} alt="spotify Logo" />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
