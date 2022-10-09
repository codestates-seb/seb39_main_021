import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Menu from "./Menu";
import List from "./List";
import LocalFilter from "./Filter";
import StoreDetail from "./storeDetailPage";
import Registration from "./Registration";
import ReviewCreate from "./ReviewCreate";
import MoreReview from "./MoreReview";
import ReviewDetail from "./ReviewDetailPage";
import RegistrationDetail from "./RegistrationDetail";
import KaKaoMap from "../component/KakaoMap";
import ReviewCorrection from "./ReviewCorrection";
import Login from "./Login";

const Router = () => {
  const [selectData, setSelectData] = useState({
    category: "카페",
    filter: {
      local: "전국",
      localId: "01",
      area: "전체",
      areaId: "000",
    },
    checkUrl: false,
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
        <Route
          path="/storeDetailPage"
          element={
            <StoreDetail
              selectData={selectData}
              setSelectData={setSelectData}
            />
          }
        />
        <Route path="/toggleMenu" element={<Menu />} />
        <Route path="/businessRegistration" element={<Registration />} />
        <Route path="/review" element={<ReviewCreate />} />
        <Route path="/moreReviews" element={<MoreReview />} />
        <Route path="/reviewDetail" element={<ReviewDetail />} />
        <Route path="/RegistrationDetail" element={<RegistrationDetail />} />
        <Route path="/map" element={<KaKaoMap />} />
        <Route path="/reviewCorrection" element={<ReviewCorrection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
