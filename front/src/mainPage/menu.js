import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <HambugerMenu>
      <header className="menuHeader">
        <Link className="loginBtn" to="/login">
          로그인 하기
        </Link>
        <button>X</button>
      </header>
      <section className="menuContent"></section>
      <footer className="menuFooter">
        <a href="*">개인정보 정책</a>
        <a href="*">이용 약관</a>
      </footer>
    </HambugerMenu>
  );
};

export default Menu;

const HambugerMenu = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    padding: 10px 0 20px;
  }
  .loginBtn {
    color: white;
  }
  button {
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
`;
