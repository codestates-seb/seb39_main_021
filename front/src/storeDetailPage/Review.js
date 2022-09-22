import styled from "styled-components";

import Button from "../component/Button";
import Image from "../component/image";

const Review = () => {
  return (
    <div>
      <div>상호</div>
      <div></div>
      <div>일시</div>
      <div>장소가 열려있었나요?</div>
      <section>
        <button>예</button>
        <button>아니오</button>
      </section>
      <div>별점</div>
      <section>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
      </section>
      <div>후기</div>
      {/* <input></input> */}
      <Image />
      <Button buttonStyle="main"> 등록하기 </Button>
    </div>
  );
};

export default Review;
