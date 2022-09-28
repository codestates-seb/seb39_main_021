import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

import Button from "../component/Button";
import Image from "../component/image";
import Star from "../component/Star";
import Header from "../mainPage/header";

const ReviewCreate = () => {
  const {
    state: { storeInfo },
  } = useLocation();

  const [buttonYes, setButtonYes] = useState(true);
  const [buttonNo, setButtonNo] = useState(false);
  const [txtChange, setTxtChange] = useState("");

  const handleOpenStore = () => {
    setButtonYes(!buttonYes);
    setButtonNo(!buttonNo);
  };

  const CreateReviewValue = {
    name: storeInfo.name,
    date: "서버에서 받아쓸것.",
    opened: buttonYes,
    txt: txtChange,
    star: "별점을 등록하는 순간 점수를 서버로 보내고, 디테일 페이지에서 띄우는건 어떨까?",
  };

  const handleTxtChange = (e) => {
    setTxtChange(e.target.value);
  };
  console.log(txtChange);

  return (
    <>
      <Header />
      <div>
        <div>상호</div>
        <div>{storeInfo.name}</div>
        <div>일시</div>
        <div>날짜 데이터는 서버에서 받아서 사용할것.</div>
        <div>장소가 열려있었나요?</div>
        <section>
          <Button
            buttonStyle={buttonYes ? "main" : "sub"}
            width="100px"
            onClick={handleOpenStore}
          >
            예
          </Button>
          <Button
            buttonStyle={buttonNo ? "main" : "sub"}
            width="100px"
            onClick={handleOpenStore}
          >
            아니오
          </Button>
          {/* radio 버튼 컴포넌트로 따로 분리하여 만들기. */}
        </section>
        <Star />
        <Image />
        <div>후기</div>
        <textarea
          placeholder="후기 내용 작성하기"
          onChange={handleTxtChange}
        ></textarea>
        <Link to="/reviewDetail" state={{ storeInfo: CreateReviewValue }}>
          <Button buttonStyle="main"> 등록하기 </Button>
        </Link>
      </div>
    </>
  );
};

export default ReviewCreate;
