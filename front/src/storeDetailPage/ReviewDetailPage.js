import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../mainPage/header";
import Button from "../component/Button";
import Star from "../component/Star";

const ReviewDetail = () => {
  const {
    state: { storeInfo },
  } = useLocation();
  const years = new Date().getFullYear();
  const months = new Date().getMonth();
  const days = new Date().getDate();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  if (storeInfo === null) {
    return;
  }

  return (
    <>
      <Header />
      <ReviewDetailInfo>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/05/07/13/28/stone-day-bag-4185981__340.jpg"
            alt="jeju island"
          />
          이미지는 서버에서 받아올것.
        </div>
        <div className="storeName">상호</div>
        <div className="storeInfoName">{storeInfo.name}</div>
        <div>일시</div>
        <div className="date">
          {`${years}년 ${months + 1}월 ${days}일 ${hours}:${minutes} ~`}
        </div>
        <div className="opened">장소가 열려 있었나요?</div>
        <div>
          {storeInfo.opened ? (
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
        <div>
          <Star />
        </div>
        <div className="reviewTxt">후기</div>
        <pre className="reviewInfoTxt">{storeInfo.txt}</pre>
        <Button buttonStyle="main">수정하기</Button>
        <Button buttonStyle="main" className="delete">
          삭제하기
        </Button>
      </ReviewDetailInfo>
    </>
  );
};

export default ReviewDetail;

const ReviewDetailInfo = styled.main`
  color: white;
  margin-top: 20px;
  .storeName {
    margin: 10px 0;
  }
  .storeInfoName {
    color: #ffc700;
    margin-bottom: 10px;
  }
  .date {
    color: #ffc700;
    margin: 10px 0;
  }
  .opened:after {
    content: "*";
    color: red;
  }
  .btnFlex {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .reviewTxt {
    margin: 10px 0;
  }
  .reviewInfoTxt {
    border: 1px solid white;
    height: 200px;
    padding: 5px;
    margin-bottom: 20px;
  }
  .delete {
    margin: 20px 0;
  }
`;
