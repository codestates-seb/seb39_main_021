import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./Home";
import Store from "./Store";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          af
        </Route>
        <Route path="/food" element={<Store />}>
          식당
        </Route>
        <Route path="/cafe">카페</Route>
        <Route path="/animal">동물병원</Route>
        <Route path="/pharmacy">약국</Route>
        <Route path="/hospital">병원</Route>
        <Route path="/sing">노래방</Route>
        <Route path="/laundry">세탁방</Route>
        <Route path="/convenience">편의점</Route>
        <Route path="/pc">pc방</Route>
        <Route path="/gas">주유소</Route>
        <Route path="/unmanned">무인판매점</Route>
        <Route path="/etc">기타 등등</Route>
        <Route path="*">기타 등등</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
