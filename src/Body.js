import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";
const Body = ({ spotify }) => {
  const [{ discoveryWeekly }, dispatch] = useDataLayerValue();
  console.log(discoveryWeekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img src={discoveryWeekly?.images[0]?.url} alt="" />
        <div className="body-infotext">
          <strong>PLAYLIST</strong>
          <h2>{discoveryWeekly?.name}</h2>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discoveryWeekly?.tracks.items.map((item, index) => (
          <SongRow track={item.track} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
