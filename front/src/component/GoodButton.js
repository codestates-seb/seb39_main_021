import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function GoodButton() {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(50);

  // 버튼 눌렀을 때 실행되는 함수
  const handleThumbsUpButton = () => {
    if (thumbsUp === false) {
      setThumbsUpCount(thumbsUpCount + 1);
      axios.post("", thumbsUpCount);
    } else {
      setThumbsUpCount(thumbsUpCount - 1);
      axios.post("", thumbsUpCount);
    }
  };

  console.log(thumbsUp);
  console.log(thumbsUpCount);

  return thumbsUpCount >= 100 ? (
    <ThumbsUpButton
      onClick={handleThumbsUpButton}
      style={thumbsUp ? " thumbsUp" : " thumbsDown"}
    >
      👍 99+
    </ThumbsUpButton>
  ) : (
    <ThumbsUpButton
      onClick={handleThumbsUpButton}
      style={
        thumbsUp
          ? { border: "2px solid #FFC700" }
          : { border: "2px solid #76736E" }
      }
    >
      👍 {thumbsUpCount}
    </ThumbsUpButton>
  );
}

const ThumbsUpButton = styled.button`
  width: 70px;
  border-radius: 100px;
  color: #fff;
`;

export default GoodButton;
