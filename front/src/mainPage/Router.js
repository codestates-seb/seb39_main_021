import { BrowserRouter, Route, Routes } from "react-router-dom";
import { usefilter, useState } from "react";

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
  const [filter, setFilter] = useState({
    local: "전국",
    localId: "01",
    area: "전체",
    areaId: "000",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/list"
          element={<List filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/localFilter"
          element={<LocalFilter filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/mapList"
          element={<MapList filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/storeDetailPage"
          element={<StoreDetail filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/businessRegistration"
          element={<Registration filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/toggleMenu"
          element={<Menu filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/businessRegistration"
          element={<Registration filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/review"
          element={<ReviewCreate filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/moreReviews"
          element={<MoreReview filter={filter} setFilter={setFilter} />}
        />
        <Route
          path="/reviewDetail"
          element={<ReviewDetail filter={filter} setFilter={setFilter} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
