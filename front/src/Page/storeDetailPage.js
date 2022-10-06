import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";

import Header from "./Header";
import Button from "../component/Button";
import StoreMap from "../component/StoreMap";
import GoodButton from "../component/GoodButton.js";

const StoreDetail = ({ selectData }) => {
  const [storeItemDetail, setStoreItemDetail] = useState(null);
  const {
    state: { storeData },
  } = useLocation();
  console.log(storeData);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/v1/shop/${storeData}`)
      .then((data) => {
        console.log(data.data);
        setStoreItemDetail(data.data);
      })
      .catch((err) => console.log(err));
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
              storeData: storeData,
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
        <div>네이버 지도로 길찾기</div>
        <StoreMap
          storeId={storeItemDetail.id}
          storeLat={storeItemDetail.latitude}
          storeLng={storeItemDetail.longitude}
        />
        <span className="storeInfo">상세설명</span>
        <p className="storeInfoTxt">{storeItemDetail.txt}</p>
        <span className="reviews">이용후기</span>
        <div className="reviewPoint">
          <span className="reviewsLike">
            {/* 구조분해 할당으로 코드 리팩토링 */}
            전체 평점:{storeItemDetail.like}점
          </span>
          <span>전체 {storeItemDetail.reviewCount}개</span>
        </div>
        <section>

          {storeItemDetail.reviews.map((reviewItems, index) => (
            <Link
              key={index}
              to="/reviewDetail"
              state={{
                reviewInfo: reviewItems.id,
              }}
            >
              <div key={index} className="reviewContainer">
                <span>{reviewItems.nickname}</span>
                <div className="reviewStar">
                  <RiStarFill className="star" />
                  {reviewItems.rating} 점
                </div>
                <GoodButton reviewInfo={reviewItems.id} />
                <p>{reviewItems.content}</p>
              </div>
            </Link>
          ))}

          <Link to="/moreReviews" className="moreReviews">
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
