import "./App.css";
import List from "./Page/List";
import MapList from "./Page/MapList";
import LocalFilter from "./Page/Filter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./mainPage/Router";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/List" element={<List />} />
          <Route path="/LocalFilter" element={<LocalFilter />} />
          <Route path="/MapList" element={<MapList />} />
        </Routes>
        <List />
      </BrowserRouter> */}
      <Router />
    </div>
  );
}

export default App;
