import Header from "../mainPage/header";

import { useLocation } from "react-router-dom";
// import { useState } from "react";
import styled from "styled-components";
import { RiStarFill } from "react-icons/ri";

const MoreReview = () => {
  // const [reviewList, setReviewList] = useState([]);

  const {
    state: { storeData },
  } = useLocation();

  const reviewInfo = storeData.reviews;
  return (
    <MoreReviews>
      <Header />
      <section className="titleContainer">
        <h1>{storeData.name}</h1>
        <select className="filterContainer">
          <option>도움이 많이 된 순서</option>
          <option>최신순서</option>
        </select>
      </section>
      <section className="itemsContainer">
        <div className="itemsHeader">
          <span>전체평점{storeData.like}</span>
          <span className="itemsQuantity">개수{reviewInfo.length}</span>
        </div>
        {reviewInfo.map((reviews, index) => (
          <div key={index} className="itemsContents">
            <img src={storeData.image} alt="가게 더미데이터" />
            <div>
              <div className="itemsName">{reviews.nickName}</div>
              <div className="itemsStar">
                <RiStarFill className="star" />
                {reviews.star}
              </div>
              <p>{reviews.reviewTxt}</p>
            </div>
          </div>
        ))}
      </section>
    </MoreReviews>
  );
};

export default MoreReview;

const MoreReviews = styled.article`
  .titleContainer {
    display: flex;
    justify-content: space-between;
    color: white;
    margin: 20px 0;
  }
  .filterContainer {
    background-color: #76736e;
    color: white;
  }
  .filterContainer option {
    font-size: 10px;
  }
  .itemsContainer {
    color: white;
  }
  .itemsHeader {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .itemsQuantity {
    padding-right: 10px;
  }
  .itemsContents {
    display: flex;
    margin-bottom: 20px;
    background-color: #504e4a;
    padding: 10px;
  }
  .itemsContents img {
    width: 96px;
    margin-right: 16px;
  }
  .itemsName {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .itemsStar {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .star {
    color: #ffc700;
  }
`;
