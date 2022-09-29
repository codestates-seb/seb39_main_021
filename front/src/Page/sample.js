import React from "react";
import { NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";

const Map = () => {
  return (
    <RenderAfterNavermapsLoaded clientId={"74d3yjicdt"}>
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        // style=
        // defaultCenter=
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
