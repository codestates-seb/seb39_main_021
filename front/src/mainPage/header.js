import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <h1>밤잠 없는 사람들</h1>
      <button>햄버거 메뉴버튼</button>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header``;
