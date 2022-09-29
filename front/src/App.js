import "./App.css";
import Router from "./mainPage/Router";
import MapList from "./Page/MapList";
import Map from "./Page/Sample";
import Sample from "./Page/Sample";

import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

function App() {
  return (
    <div className="App">
      <Router />
      {/* <MapList /> */}
      {/* <Map /> */}
      {/* <Sample /> */}
      <NaverMap
        id="maps-examples-map-simple"
        style={{
          width: "100%",
          height: "600px",
        }}
      />
    </div>
  );
}

export default App;
