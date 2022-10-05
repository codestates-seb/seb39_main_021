import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggleMenu, openMenu }) => {
  return (
    <MainHeader>
      <div> </div>
      <a href="/">밤잠 없는 사람들</a>
      <Link
        to="/toggleMenu"
        // onClick={() => toggleMenu(!openMenu)}
        className="menuBtn"
      >
        <GiHamburgerMenu />
      </Link>
    </MainHeader>
  );
};
export default Header;

const MainHeader = styled.header`
  border-bottom: 1px solid white;
  padding: 0px 24px;
  display: flex;
  justify-content: space-between;

  div {
    align-items: center;
  }
  .menuBtn {
    color: white;
  }
  a {
    color: white;
    font-size: 20px;
  }
`;
