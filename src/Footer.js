import React from "react";
import "./Footer.css";
import { useDataLayerValue } from "./DataLayer";
const Footer = () => {
  const [{ playTrack }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
      <iframe
        src={`https://open.spotify.com/embed/track/${playTrack?.id}?utm_source=generator`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Footer;
