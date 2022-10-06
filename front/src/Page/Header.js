import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import Logo from "../asset/mainProjectLogo.png";

const Header = () => {
  return (
    <MainHeader>
      <div> </div>
      <a href="*">
        <img src={Logo} alt="Logo" />
      </a>
      <Link to="/toggleMenu" className="menuBtn">
        <IoIosMenu />
      </Link>
    </MainHeader>
  );
};
export default Header;

const MainHeader = styled.header`
  border-bottom: 1px solid #76736e;
  padding: 0px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 47px;

  div {
    height: 24px;
    width: 24px;
  }

  .menuBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  a {
    img {
      height: 36px;
    }
  }
`;
