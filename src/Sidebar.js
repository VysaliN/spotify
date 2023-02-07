import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import spotifyimg from "./Spotify.jpeg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={spotifyimg} alt="" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-tilte">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption
          title={playlist.name}
          key={index}
          spotify={spotify}
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
        />
      ))}
    </div>
  );
};

export default Sidebar;
