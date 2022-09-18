import { useState } from "react";
import styled from "styled-components";
import Menu from "./menu";

const Header = ({ toggleMenu, openMenu }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const loginPage = () => {
    setOpenLogin(!openLogin);
    toggleMenu(!openMenu);
  };
  return (
    <MainHeader>
      <div>
        <h1>밤잠 없는 사람들</h1>
        <button onClick={() => loginPage()}>햄버거 이미지</button>
      </div>
      {openLogin ? <Menu /> : null}
    </MainHeader>
  );
};
/*
  button 은 토글로 만들기로 합의봄.
*/
export default Header;

const MainHeader = styled.header`
  .hidden {
    display: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
`;
