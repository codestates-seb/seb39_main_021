import styled from "styled-components";

import Logo from "../asset/mainProjectLogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} />
      <div>Copyright 2022. 밤잠 없는 사람들 all rights reserved.</div>
      <section>
        <a href="">이용약관</a>
        <div />
        <a href="">개인정보처리방침</a>
        <div />
        <a href="">만든이</a>
      </section>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #76736e;
  color: #fff;
  font-size: 12px;

  img {
    width: 42px;
    margin-bottom: 16px;
  }

  section {
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #333;
    }

    div {
      width: 1px;
      height: 13px;
      background-color: #555;
      margin: 0px 10px;
    }
  }
`;
export default Footer;
