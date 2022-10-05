import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div>Copyright 2022. 밤잠 없는 사람들 all rights reserved.</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Footer;
