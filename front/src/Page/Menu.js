import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <HamburgerMenu>
      <header className="menuHeader">
        <Link className="loginBtn" to="/login">
          로그인 하기
        </Link>
        <Link to="/" className="menuClose">
          X
        </Link>
      </header>
      <section className="menuContent">
        <Link to="/businessRegistration" className="registration">
          사업장 등록하기
        </Link>
      </section>
      <footer className="menuFooter">
        <a href="*">개인정보 정책</a>
        <a href="*">이용 약관</a>
      </footer>
    </HamburgerMenu>
  );
};

export default Menu;

const HamburgerMenu = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    padding: 10px 0 20px;
  }
  .loginBtn {
    color: white;
  }
  .menuClose {
    color: white;
  }

  .menuContent {
    height: 300px;
  }
  .menuFooter {
    display: flex;
    flex-direction: column;
    border-top: 1px solid white;
    padding-bottom: 10px;
  }

  .menuFooter a {
    margin-top: 10px;
    color: #76736e;
  }
  .registration {
    display: inline-block;
    color: white;
    margin-top: 10px;
  }
`;
