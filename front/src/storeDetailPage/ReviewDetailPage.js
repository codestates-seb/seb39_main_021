import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../mainPage/header";
import Button from "../component/Button";
import Star from "../component/Star";

const ReviewDetail = () => {
  const {
    state: { storeInfo },
  } = useLocation();
  console.log(storeInfo);
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
        <div>이미지</div>
        <div>상호</div>
        <div>{storeInfo.name}</div>
        <div>일시</div>
        <div>
          {`${years}년 ${months + 1}월 ${days}일 ${hours}:${minutes} ~`}
        </div>
        <div>장소가 열려 있었나요?</div>
        <div>
          {storeInfo.opened ? (
            <>
              <Button buttonStyle="main" width="100px">
                예
              </Button>
              <Button buttonStyle="sub" width="100px">
                아니오
              </Button>
            </>
          ) : (
            <>
              <Button buttonStyle="sub" width="100px">
                예
              </Button>
              <Button buttonStyle="main" width="100px">
                아니오
              </Button>
            </>
          )}
        </div>
        <div>별점</div>
        <div>
          <Star />
        </div>
        <div>후기</div>
        <pre>{storeInfo.txt}</pre>
      </ReviewDetailInfo>
    </>
  );
};

export default ReviewDetail;

const ReviewDetailInfo = styled.main`
  color: white;
`;
