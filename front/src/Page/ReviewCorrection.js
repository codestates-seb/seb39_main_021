import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Button from "../component/Button";
import Header from "./Header";
import Star from "../component/Star";
import Image from "../component/Image";
import axios from "axios";

const ReviewCorrection = () => {
  const {
    state: { reviewData },
  } = useLocation();
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const [textChange, setTextChange] = useState();
  const starNum = [0, 1, 2, 3, 4];

  const handleStarChange = (index) => {
    let clickStates = [...checked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setChecked(clickStates);
  };

  const handleTxtChange = (event) => {
    setTextChange(event.target.value);
  };

  const handleReview = () => {
    let likeCount = 0;

    for (let i = 0; i < checked.length; i++) {
      if (checked[i] === true) {
        likeCount = likeCount + 1;
      }
    }
    axios({
      url: `https://gloom.loca.lt/v1/review/${reviewData.id}`,
      method: "patch",
      data: {
        rating: likeCount,
        content: textChange,
        imageList: [],
      },
    })
      .then(console.log("성공"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <ReviewDetailInfo>
        <div>이미지</div>
        <Image />
        <div className="storeName">상호</div>
        <div className="storeInfoName">{reviewData.shopName}</div>
        <div>일시</div>
        <div className="date">{reviewData.createAt}</div>
        <div reviewInfo="opened">장소가 열려 있었나요?</div>
        <div>
          {reviewData.openCheck ? (
            <div className="btnFlex">
              <Button buttonStyle="main" width="150px">
                예
              </Button>
              <Button buttonStyle="sub" width="150px">
                아니오
              </Button>
            </div>
          ) : (
            <div className="btnFlex">
              <Button buttonStyle="sub" width="150px">
                예
              </Button>
              <Button buttonStyle="main" width="150px">
                아니오
              </Button>
            </div>
          )}
        </div>
        <div>별점</div>
        <Star
          handleStarChange={handleStarChange}
          checked={checked}
          starNum={starNum}
        />
        <div>후기</div>
        <textarea
          placeholder={reviewData.content}
          onChange={handleTxtChange}
        ></textarea>
        <Button buttonStyle="main" onClick={handleReview}>
          <Link to="/">수정완료</Link>
        </Button>
      </ReviewDetailInfo>
    </>
  );
};

export default ReviewCorrection;

const ReviewDetailInfo = styled.main`
  color: white;
`;
