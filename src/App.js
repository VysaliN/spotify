import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();
const App = () => {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        playlists?.items?.map((playlistId) =>
          spotify.getPlaylist(playlistId?.id).then((res) =>
            dispatch({
              type: "SET_DISCOVERY_WEEKLY",
              discoveryWeekly: res,
            })
          )
        );
      });
    }
  }, []);
  console.log(playlists);
  return (
    <div className="spotify">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;
