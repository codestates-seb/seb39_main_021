import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={"74d3yjicdt"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>
);
