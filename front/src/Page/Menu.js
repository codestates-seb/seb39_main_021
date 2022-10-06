import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const Menu = () => {
  return (
    <HamburgerMenu>
      <header className="menuHeader">
        <Link to="/" className="menuClose">
          <IoIosClose />
        </Link>
      </header>
      <LoginContainer>
        <div>
          <img src="https://user-images.githubusercontent.com/103917785/194172721-0b79e251-587e-48d3-84cd-0acd26bb0cd3.png" />
        </div>
        <Link className="loginBtn" to="/login">
          로그인 하기
        </Link>
      </LoginContainer>
      <MenuContent>
        <Link to="/businessRegistration" className="registration">
          사업장 등록하기
        </Link>
        <a href="https://14ddk.channel.io">1:1 문의하기</a>
        <a href="">이용약관</a>
        <a href="">개인정보처리방침</a>
        <a href="">만든이</a>
      </MenuContent>
    </HamburgerMenu>
  );
};

export default Menu;

const HamburgerMenu = styled.section`
  .menuHeader {
    height: 47px;
    display: flex;
    flex-direction: row-reverse;
    padding: 0px 24px;
    align-items: center;
    border-bottom: 1px solid #76736e;

    .menuClose {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      width: 24px;

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

const LoginContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 24px 24px 100px 24px;
  div {
    width: 56px;
    height: 56px;
    margin-right: 20px;
  }

  a {
    font-size: 14px;
  }
`;

const MenuContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 24px;
  font-size: 1.4rem;

  a {
    margin-top: 2em;
    color: #fff;
  }
`;
