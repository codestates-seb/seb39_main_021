import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  button {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    padding: 14px;
  }
`;

const MainButton = styled.button`
  width: ${(props) => props.width || "342px"};
  background-color: var(--mainYellow);
  color: var(--mainDeepGray);
  border: 2px solid var(--mainYellow);
`;

const SubMainButton = styled.button`
  width: ${(props) => props.width || "342px"};
  background-color: var(--mainDeepGray);
  color: var(--mainYellow);
  border: 2px solid var(--mainYellow);
`;

const EtcButton = styled.button`
  width: ${(props) => props.width || "342px"};
  background-color: var(--mainLighitGray);
  color: white;
  border: 2px solid var(--mainLighitGray);
`;

function Button({ children, ...props }) {
  const style = props.buttonStyle;

  return (
    // <ButtonStyled>
    style === "main" ? (
      <MainButton {...props}> {children} </MainButton>
    ) : style === "sub" ? (
      <SubMainButton {...props}> {children} </SubMainButton>
    ) : (
      <EtcButton {...props}> {children} </EtcButton>
    )
    // </ButtonStyled>
  );
}

export default Button;
