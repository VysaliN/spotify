import React from "react";
import "./SongRow.css";
import { useDataLayerValue } from "./DataLayer";

const SongRow = ({ track }) => {
  const [{}, dispatch] = useDataLayerValue();
  return (
    <div
      className="songrow"
      onClick={() => {
        dispatch({
          type: "SET_PLAY_TRACK",
          playTrack: track,
        });

        dispatch({
          type: "SET_SONG_SELECT",
          songSelected: true,
        });
      }}
    >
      <img className="songrow-album" src={track.album.images[0].url} alt="" />
      <div className="songrow-info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
