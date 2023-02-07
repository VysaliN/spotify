import React from "react";
import "./Login.css";
import SpotifyLogo from "./Spotify.jpeg";
import { loginUrl } from "./spotify";

const login = () => {
  return (
    <div className="login">
      <img src={SpotifyLogo} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default login;
