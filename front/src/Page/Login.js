import styled from "styled-components";

import Header from "./Header";
import KakaoLoginButton from "../asset/kakao.png";

const Login = () => {
  return (
    <section>
      <Header />
      <LoginContainer>
        <div>우리 아직 안됫는디?</div>
        <a href="*">
          <img
            className="kakaologinButton"
            src={KakaoLoginButton}
            alt="kakao login"
          />
        </a>
      </LoginContainer>
    </section>
  );
};

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    color: #ffffff;
    height: 500px;
  }
  .kakaologinButton {
    width: 325px;
  }
`;
export default Login;
