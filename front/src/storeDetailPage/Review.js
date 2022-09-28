import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../component/Button";
import { ReactComponent as Star } from "../asset/star.svg";

const Review = () => {
  const [onClick, setOnClick] = useState(false);
  const [star, setStar] = useState("#ffffff");

  const changeStar = () => {
    onClick ? setOnClick(false) : setOnClick(true);
    onClick ? setStar("#111111") : setStar("#ffffff");
  };

  console.log(onClick);
  console.log(star);
  return (
    <div>
      <div>상호</div>
      <div></div>
      <div>일시</div>
      <div>장소가 열려있었나요?</div>
      <section>
        <button>예</button>
        <button>아니오</button>
      </section>
      <div>별점</div>
      <section>
        <button>
          <Star onClick={changeStar} fill={star} />
        </button>
        <button>
          <Star fill={star} />
        </button>
        <button>
          <Star fill={star} />
        </button>
        <button>
          <Star fill={star} />
        </button>
        <button>
          <Star fill={star} />
        </button>
      </section>
      <div>후기</div>
      <input></input>
      <Button buttonStyle="main">
        <Link to={"/reviewDetail"} /> 등록하기
      </Button>
    </div>
  );
};

export default Review;
