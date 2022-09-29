import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

import Button from "../component/Button";
import Image from "../component/Image";
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
    <CreateReview>
      <Header />
      <section className="reviewContainer">
        <div>상호</div>
        <div className="storeInfo">{storeInfo.name}</div>
        <div>일시</div>
        <div className="storeInfo">날짜 데이터는 서버에서 받아서 사용할것.</div>
        <div className="opened">장소가 열려있었나요?</div>
        <section className="storeBtn">
          <Button
            buttonStyle={buttonYes ? "main" : "sub"}
            width="150px"
            onClick={handleOpenStore}
          >
            예
          </Button>
          <Button
            buttonStyle={buttonNo ? "main" : "sub"}
            width="150px"
            onClick={handleOpenStore}
          >
            아니오
          </Button>
        </section>
        <div className="itemStarTxt">별점</div>
        <Star />
        <Image />
        <div className="reviewTxtTitle">후기</div>
        <textarea
          placeholder="후기 내용 작성하기"
          onChange={handleTxtChange}
          className="reviewTxt"
        ></textarea>
        <Link to="/reviewDetail" state={{ storeInfo: CreateReviewValue }}>
          <Button buttonStyle="main"> 등록하기 </Button>
        </Link>
      </section>
    </CreateReview>
  );
};

export default ReviewCreate;

const CreateReview = styled.article`
  .reviewContainer {
    color: white;
    margin-top: 28px;
  }
  .storeInfo {
    color: #ffc700;
    margin: 10px 0;
  }
  .opened:after {
    content: "*";
    color: red;
  }
  .storeBtn {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .itemStarTxt:after {
    content: "*";
    color: red;
  }
  .itemStarTxt {
    margin: 10px 0;
  }
  .reviewTxtTitle {
    margin: 0 0 10px 0;
  }
  .reviewTxt {
    width: 97%;
    height: 200px;
    padding: 5px;
    background-color: #76736e;
    color: white;
    border: 1px solid white;
    margin-bottom: 20px;
  }
`;
