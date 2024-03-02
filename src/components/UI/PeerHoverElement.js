import React from "react";

const PeerHoverElement = (props) => {
  return (
    <div
      className={`hidden peer-hover/${props.peerName}:${props.displayOnPeerHover} ${props.classes || ""}`}
    >
      {props.children}
    </div>
  );
};

export default PeerHoverElement;
