import { useState, useEffect } from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";
const Star = () => {
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const starNum = [0, 1, 2, 3, 4];

  const handleStarChange = (index) => {
    let clickStates = [...checked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setChecked(clickStates);
  };

  // const sendReview = () => {
  //   let score = checked.filter(Boolean.length);
  // };

  // useEffect(() => {
  //   sendReview();
  // }, [checked]);

  return (
    <StarContainer>
      {starNum.map((el, idx) => {
        return (
          <ImStarFull
            key={idx}
            onClick={() => handleStarChange(el)}
            className={checked[el] && "yellowStar"}
          />
        );
      })}
    </StarContainer>
  );
};

export default Star;

const StarContainer = styled.div`
  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
