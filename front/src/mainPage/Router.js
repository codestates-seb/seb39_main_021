import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./Home";
import Menu from "../menuPage/menu";
import List from "../Page/List";
import LocalFilter from "../Page/Filter";
import StoreDetail from "../storeDetailPage/storeDetailPage";
import Registration from "../menuPage/Registration";
import ReviewCreate from "../storeDetailPage/ReviewCreate";
import MoreReview from "../Page/MoreReview";
import ReviewDetail from "../storeDetailPage/ReviewDetailPage";
import RegistrationDetail from "../Page/RegistrationDetail";

const Router = () => {
  const url = "https://gloom.loca.lt";
  const [list, setList] = useState(null);
  useEffect(() => {
    axios
      .get(
        `${url}/v1/shop?page=1&size=10&cityId=02&areaId=008&category=%EC%9D%8C%EC%8B%9D%EC%A0%90`
      )
      .then((a) => {
        // data.json();
        // console.log(a.data.data);
        setList(a.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(list);

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
            <List
              list={list}
              selectData={selectData}
              setSelectData={setSelectData}
            />
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
        <Route path="/storeDetailPage" element={<StoreDetail />} />
        <Route path="/businessRegistration" element={<Registration />} />
        <Route path="/toggleMenu" element={<Menu />} />
        <Route path="/businessRegistration" element={<Registration />} />
        <Route path="/review" element={<ReviewCreate list={list} />} />
        <Route path="/moreReviews" element={<MoreReview />} />
        <Route path="/reviewDetail" element={<ReviewDetail />} />
        <Route path="/RegistrationDetail" element={<RegistrationDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
