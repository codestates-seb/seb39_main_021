import styled from "styled-components";

const Input = (props) => {
  return props.color === "gray" ? <InputBorderGray /> : <InputBorderYellow />;
};

export default Input;

const InputBorderGray = styled.input`
  border: 1px solid #76736e;
  padding: 5px;
`;

const InputBorderYellow = styled.input`
  border: 1px solid #ffc700;
  padding: 5px;
`;
