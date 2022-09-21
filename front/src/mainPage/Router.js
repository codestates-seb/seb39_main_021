import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Menu from "../menuPage/menu";
import List from "../Page/List";
import LocalFilter from "../Page/Filter";
import MapList from "../Page/MapList";
import StoreDetail from "../storeDetailPage/storeDetailPage";
import Registration from "../menuPage/Registration";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/localFilter" element={<LocalFilter />} />
          <Route path="/mapList" element={<MapList />} />
          <Route path="/storeDetailPage" element={<StoreDetail />} />
          <Route path="/businessRegistration" element={<Registration />} />
          <Route path="/toggleMenu" element={<Menu />} />
          <Route path="/businessRegistration" element={<Registration />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
