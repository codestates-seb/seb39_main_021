import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Menu from "../menuPage/menu";
import List from "../Page/List";
import LocalFilter from "../Page/Filter";
import MapList from "../Page/MapList";
import StoreDetail from "../storeDetailPage/storeDetailPage";
import Registration from "../menuPage/Registration";
import ReviewCreate from "../storeDetailPage/ReviewCreate";
import MoreReview from "../Page/MoreReview";
import ReviewDetail from "../storeDetailPage/ReviewDetailPage";

const Router = () => {
  const [selectData, setSelectData] = useState({
    category: "임시",
    filter: {
      local: "전국",
      localId: "01",
      area: "전체",
      areaId: "000",
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home selectData={selectData} setSelectData={setSelectData} />
          }
        />
        <Route
          path="/list"
          element={
            <List selectData={selectData} setSelectData={setSelectData} />
          }
        />
        <Route
          path="/localFilter"
          element={
            <LocalFilter
              selectData={selectData}
              setSelectData={setSelectData}
            />
          }
        />
        {/* <Route
          path="/mapList"
          element={
            <MapList selectData={selectData} setSelectData={setSelectData} />
          }
        /> */}
        <Route path="/storeDetailPage" element={<StoreDetail />} />
        <Route path="/businessRegistration" element={<Registration />} />
        <Route path="/toggleMenu" element={<Menu />} />
        <Route path="/businessRegistration" element={<Registration />} />
        <Route path="/review" element={<ReviewCreate />} />
        <Route path="/moreReviews" element={<MoreReview />} />
        <Route path="/reviewDetail" element={<ReviewDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
