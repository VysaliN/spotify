import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./DataLayer";
const SidebarOption = ({
  title,
  Icon,
  spotify,
  selectedPlaylist,
  setSelectedPlaylist,
}) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebaroption-icon" />}
      {Icon ? (
        <h1>{title}</h1>
      ) : (
        <p
          onClick={(e) => {
            setSelectedPlaylist(e.target.innerHTML);

            playlists?.items.map(
              (item) =>
                e.target.innerHTML === item.name &&
                spotify.getPlaylist(item?.id).then((res) =>
                  dispatch({
                    type: "SET_DISCOVERY_WEEKLY",
                    discoveryWeekly: res,
                  })
                )
            );
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default SidebarOption;
