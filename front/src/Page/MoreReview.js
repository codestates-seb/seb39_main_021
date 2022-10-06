import Header from "./Header";

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { RiStarFill } from "react-icons/ri";
import axios from "axios";

const MoreReview = () => {
  const [reviewList, setReviewList] = useState(null);
  const test = useRef();
  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_URL_API}/v1/review/?page=1&shopId=1&sort=upvote`,
      method: "get",
    }).then((data) => {
      setReviewList(data.data.data);
    });
  }, []);

  const viewLike = () => {
    console.log("hello world");
    axios({
      url: `${process.env.REACT_APP_URL_API}/v1/review/?page=1&shopId=1&sort=upvote`, // 좋아요 순서 url
      method: "get",
    }).then((data) => console.log(data));
  };

  const listChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "최신순서") {
      axios({
        url: `${process.env.REACT_APP_URL_API}/v1/review/?page=1&shopId=1&sort=""`, // 최신순서 url
      }).then((data) => setReviewList(data.data.data));
    } else {
      axios({
        url: `${process.env.REACT_APP_URL_API}/v1/review/?page=1&shopId=1&sort=upvote`, // 최신순서 url
      }).then((data) => setReviewList(data.data.data));
    }
  };

  if (reviewList === null) {
    return;
  }

  return (
    <MoreReviews>
      <Header />
      <section className="titleContainer">
        <h1>{reviewList.nickname}</h1>
        <select
          className="filterContainer"
          onChange={(event) => listChange(event)}
        >
          <option>좋아요 순서</option>
          <option onClick={viewLike}>최신순서</option>
        </select>
      </section>
      <section className="itemsContainer">
        <div className="itemsHeader">
          <span>전체평점</span>
          <span className="itemsQuantity">개수{reviewList.length}</span>
        </div>
        {reviewList.map((reviews, index) => (
          <Link to="/reviewDetail">
            <div key={reviews.id} className="itemsContents">
              <img src={reviews.image} alt="가게 더미데이터" />
              <div>
                <div className="itemsName">{reviews.nickName}</div>
                <div className="itemsStar">
                  <RiStarFill className="star" />
                  {reviews.rating}
                </div>
                <p>{reviews.reviewTxt}</p>
              </div>
            </div>
          </Link>
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
