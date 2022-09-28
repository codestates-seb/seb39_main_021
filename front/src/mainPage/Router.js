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
  const [state, setState] = useState();

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={<Home state={state} setState={setState} />}
          />
          <Route
            path="/list"
            element={<List state={state} setState={setState} />}
          />
          <Route
            path="/localFilter"
            element={<LocalFilter state={state} setState={setState} />}
          />
          <Route
            path="/mapList"
            element={<MapList state={state} setState={setState} />}
          />
          <Route
            path="/storeDetailPage"
            element={<StoreDetail state={state} setState={setState} />}
          />
          <Route
            path="/businessRegistration"
            element={<Registration state={state} setState={setState} />}
          />
          <Route
            path="/toggleMenu"
            element={<Menu state={state} setState={setState} />}
          />
          <Route
            path="/businessRegistration"
            element={<Registration state={state} setState={setState} />}
          />
          <Route
            path="/review"
            element={<ReviewCreate state={state} setState={setState} />}
          />
          <Route
            path="/moreReviews"
            element={<MoreReview state={state} setState={setState} />}
          />
          <Route
            path="/reviewDetail"
            element={<ReviewDetail state={state} setState={setState} />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
