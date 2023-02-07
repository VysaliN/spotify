export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discoveryWeekly: null,
  playTrack: null,
  songSelected: false,
  //   token:
  //     "BQBBGrPAuTJ4vkkXSRsZgGExU6hkYZyPXYXngL2iOCyCQwHgFHBmP414C02eIhzwLxFeDI6crbJnBgh29jF_A7a-2PYFuSZDFPhB3ducZvz0z8mmCPWntGbqdi-ITTzVN86kmdv8tgDNPsUuD1qJKSQHSlvfYP8GJzX06YTJAyTVwZqqExmV0LYBcIMCfIMcnWBovTNgdiiojqqwmJDreg",
  // };
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVERY_WEEKLY":
      return {
        ...state,
        discoveryWeekly: action.discoveryWeekly,
      };
    case "SET_PLAY_TRACK":
      return {
        ...state,
        playTrack: action.playTrack,
      };

    case "SET_SONG_SELECT":
      return {
        ...state,
        songSelected: action.songSelected,
      };
    default:
      return state;
  }
};
export default reducer;
