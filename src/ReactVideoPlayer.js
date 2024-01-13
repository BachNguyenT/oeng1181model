import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
// import "./Video.css";

import modelVideo from "./assets/IMG_6464.MOV";
import thum from "./assets/Screen Shot 2024-01-13 at 11.47.59 AM.png";

const ReactVideoPlayer = () => {
  return (
    <div className="Div">
      <Video
        autoPlay
        loop
        poster={thum}
        style={{ height: "100vh" }}
        onCanPlayThrough={() => {
          console.log("out");
        }}
      >
        <source src={modelVideo} type="video/webm" />
      </Video>
    </div>
  );
};

export default ReactVideoPlayer;
