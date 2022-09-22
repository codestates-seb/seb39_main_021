import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./header";
import Home from "./Home";
import Menu from "./menu";
import Cafe from "./Cafe";
import List from "../Page/List";
import LocalFilter from "../Page/Filter";
import MapList from "../Page/MapList";
import StoreDetail from "../storeDetailPage/storeDetailPage";
import Review from "../storeDetailPage/Review";

const Router = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <BrowserRouter>
      {openMenu ? (
        <>
          <Header toggleMenu={toggleMenu} openMenu={openMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/food" element={<Food />} /> */}
            <Route path={`/cafe`} element={<Cafe />} />
            {/* <Route path="/animal">동물병원</Route>
          <Route path="/pharmacy">약국</Route>
          <Route path="/hospital">병원</Route>
          <Route path="/sing">노래방</Route>
          <Route path="/laundry">세탁방</Route>
          <Route path="/convenience">편의점</Route>
          <Route path="/pc">pc방</Route>
          <Route path="/gas">주유소</Route>
          <Route path="/unmanned">무인판매점</Route>
          <Route path="/etc">기타 등등</Route> */}
            <Route path="/login" element={<Menu />} />
            <Route path="/list" element={<List />} />
            <Route path="/localFilter" element={<LocalFilter />} />
            <Route path="/mapList" element={<MapList />} />
            <Route path="/storeDetailPage" element={<StoreDetail />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </>
      ) : (
        <Menu toggleMenu={toggleMenu} openMenu={openMenu} />
      )}
    </BrowserRouter>
  );
};

export default Router;
