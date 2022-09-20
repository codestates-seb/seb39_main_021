import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, openMenu }) => {
  return (
    <MainHeader>
      <div>
        <a href="/">밤잠 없는 사람들</a>
        <Link
          to="/login"
          onClick={() => toggleMenu(!openMenu)}
          className="menuBtn"
        >
          햄버거 이미지
        </Link>
      </div>
    </MainHeader>
  );
};
export default Header;

const MainHeader = styled.header`
  div {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  .menuBtn {
    color: white;
  }
  a {
    color: white;
    font-size: 20px;
  }
`;
