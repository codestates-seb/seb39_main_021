import Header from "../mainPage/header";

import { useLocation } from "react-router-dom";
import { useState } from "react";

const MoreReview = () => {
  const [reviewList, setReviewList] = useState([]);
  const {
    state: { storeData },
  } = useLocation();
  console.log(storeData);
  const reviewInfo = storeData.reviews;
  return (
    <article>
      <Header />
      <section>
        <h1>{storeData.name}</h1>
        <select>
          <option>도움이 많이 된 순서</option>
          <option>최신순서</option>
        </select>
      </section>
      <section>
        <div>
          <span>전체평점{storeData.like}</span>
          <span>개수{reviewInfo.length}</span>
        </div>
        {reviewInfo.map((reviews, index) => (
          <div key={index}>
            <img src={storeData.image} alt="가게 더미데이터" />
            <div>{reviews.nickName}</div>
            <div>별{reviews.star}</div>
            <p>{reviews.reviewTxt}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export default MoreReview;
