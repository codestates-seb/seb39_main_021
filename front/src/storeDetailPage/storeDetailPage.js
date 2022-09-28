import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";

import Header from "../mainPage/header";
import Button from "../component/Button";

/*
    카테고리 선택 => 해당 카테고리 페이지로 이동
    => 리스트중 아이탬 선택 => axios 요청 
    ( url 은 업체 리스트에서 아디값(useParams)을 받아 와야한다? )
    => 이후 id 값 뒤에 추가 url 이 붙으면서 데이터를 받아오는게 좋을듯 싶은데,,,
*/

const StoreDetail = () => {
  const [storeItemDetail, setStoreItemDetail] = useState(null);
  const {
    state: { storeData },
  } = useLocation();

  const [store] = storeData?.stores;
  // 배열 구조분해할당 => 배열의 0번째

  useEffect(() => {
    setStoreItemDetail(store);
    // axios
    //   .get(
    //     "https://bizno.net/api/fapi?key=eWhqMDQzOUBuYXZlci5jb20g&gb=1&q=3988701116"
    //   )
    //   .then((data) => console.log(JSON.stringify(data)));
  }, []);

  if (storeItemDetail === null) {
    return;
  }
  return (
    <StoreContainer>
      <Header />
      <section className="detailDataContainer">
        <div className="detailDataHeader">
          <h3>{storeItemDetail.name}</h3>
          <Link
            to="/review"
            className="reviewConfirm"
            state={{
              storeInfo: storeItemDetail,
            }}
          >
            <Button buttonStyle="main" width="100px" className="Confirmation">
              방문 확인하기
            </Button>
          </Link>
        </div>
        <span className="storeDataAddress">주소</span>
        <p>{storeItemDetail.address}</p>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B8%B8%EC%B0%BE%EA%B8%B0"
          className="naverMap"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPTbYpFFZb3FjObdDqyvsPPsYyCWFEwEBvQ&usqp=CAU"
            alt="네이버 지도 아이콘"
            className="naverMapIcon"
          />
          네이버 지도로 길찾기
        </a>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2014/11/10/11/43/map-525349__340.png"
            alt="더미데이터 지도"
          ></img>
        </div>
        <span className="storeInfo">상세설명</span>
        <p className="storeInfoTxt">{storeItemDetail.txt}</p>
        <span className="reviews">이용후기</span>
        <div className="reviewPoint">
          <span className="reviewsLike">
            전체 평점:{storeItemDetail.like}점
          </span>
          <span>전체 {storeItemDetail.reviews.length}개</span>
        </div>
        <section>
          {/* 별점 많은 순으로 3개 노출 코드로 변경할것. */}
          {storeItemDetail.reviews.map((reviewItems, index) => (
            <div key={index} className="reviewContainer">
              <span>{reviewItems.nickName}</span>
              <div className="reviewStar">
                <RiStarFill className="star" />
                {reviewItems.star}
                {/* 서버와 통신 후 받아온 숫자 or 문자값을 반복문을 사용하여 별 찍어낼것. */}
              </div>
              <p>{reviewItems.reviewTxt}</p>
            </div>
          ))}
          <Link
            to="/moreReviews"
            state={{
              storeData: store,
            }}
            className="moreReviews"
          >
            더보기
          </Link>
        </section>
      </section>
    </StoreContainer>
  );
};

export default StoreDetail;

const StoreContainer = styled.main`
  margin: 20px 0;
  color: white;
  .detailDataContainer {
    margin-top: 28px;
  }
  .detailDataHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .detailDataHeader h3 {
    color: #ffc700;
    line-height: 32px;
    font-size: 20px;
  }
  .Confirmation {
    font-size: 1.07em;
    height: 26px;
  }
  .reviewConfirm {
    color: white;
  }
  .reviewConfirm {
    color: white;
  }
  span {
    color: #76736e;
  }
  .storeDataAddress {
    display: inline-block;
    margin: 20px 0 5px;
  }
  .naverMapIcon {
    width: 12px;
    margin-right: 5px;
  }
  .naverMap {
    display: flex;
    align-items: center;
    margin: 20px 0 10px;
    color: white;
  }
  .storeInfo {
    display: inline-block;
    margin: 20px 0 10px;
  }
  .storeInfoTxt {
    padding: 30px 10px;
    border: 1px solid black;
  }
  .reviews {
    display: inline-block;
    margin: 20px 0 5px;
  }
  .reviewsLike {
    margin-right: 5px;
  }
  .moreReviews {
    color: white;
  }
  .star {
    color: #ffc700;
    margin-right: 5px;
  }
  .reviewContainer {
    border: 1px solid white;
    padding: 10px;
    margin-bottom: 10px;
  }
  .reviewContainer span {
    color: white;
  }
  .reviewPoint {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .reviewPoint span {
    color: white;
  }
  .reviewStar {
    margin: 5px 0;
  }
`;
