import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../component/Button";
import Image from "../component/Image";
import Star from "../component/Star";
import Header from "../mainPage/header";
import axios from "axios";

const ReviewCreate = ({ list }) => {
  const [buttonYes, setButtonYes] = useState(true);
  const [buttonNo, setButtonNo] = useState(false);
  const [txtChange, setTxtChange] = useState("");
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const starNum = [0, 1, 2, 3, 4];

  const navigate = useNavigate();

  const handleStarChange = (index) => {
    let clickStates = [...checked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setChecked(clickStates);
  };

  const handleOpenStore = () => {
    setButtonYes(!buttonYes);
    setButtonNo(!buttonNo);
  };

  const handleTxtChange = (e) => {
    setTxtChange(e.target.value);
  };

  const handleCreateReview = () => {
    let likeCount = 0;

    // 별의 true 개수를 확인하는 함수
    for (let i = 0; i < checked.length; i++) {
      if (checked[i] === true) {
        likeCount = likeCount + 1;
      }
    }

    axios({
      method: "post",
      url: "https://gloom.loca.lt/v1/review",
      body: {
        memberId: 1,
        reviewBoardId: 1,
        commentBody: {
          shopId: 1, // 업체의 아이디
          memberId: 1, // 고유아이디
          rating: likeCount, // 별점
          content: txtChange, // 후기 작성
          openCheck: buttonYes, // 열었는지 여부확인(boolean)
          image: [],
        },
      },
    });
    alert("리뷰 등록 완료 !");
    navigate("/list");
  };

  return (
    <CreateReview>
      <Header />
      <section className="reviewContainer">
        <div>상호</div>
        <div className="storeInfo"></div>
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
        <div>
          <Star
            handleStarChange={handleStarChange}
            checked={checked}
            starNum={starNum}
          />
        </div>
        <Image />
        <div className="reviewTxtTitle">후기</div>
        <textarea
          placeholder="후기 내용 작성하기"
          onChange={handleTxtChange}
          className="reviewTxt"
        ></textarea>
        {/* <Link to="/reviewDetail"> */}
        <Button buttonStyle="main" onClick={handleCreateReview}>
          등록하기
        </Button>
        {/* </Link> */}
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
