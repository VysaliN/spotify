import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player1">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
