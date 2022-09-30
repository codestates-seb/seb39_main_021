import "./App.css";
import Router from "./mainPage/Router";

import axios from "axios";
import { useEffect } from "react";
import KaKaoMap from "./Page/KakaoMap";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8080/v1/shop?page=1&size=10&cityId=02&areaId=008&category=음식점`
  //     )
  //     .then((data) => {
  //       data.json();
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div className="App">
      <Router />
      <KaKaoMap />
    </div>
  );
}

export default App;
