import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiRoadMapLine, RiStarFill } from "react-icons/ri";

import Header from "../mainPage/header";

const List = () => {
  const [storeList, setStoreList] = useState(null);
  const storeLists = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:4000/items")
      .then(() => setStoreList(storeLists.state.info));
  }, []);
  return (
    <StoreList>
      <Header />
      {storeList !== null && <h2> {storeList.title} </h2>}
      <section className="buttonContainer">
        <button className="filterLocal">
          <Link to="/LocalFilter" className="filterLocal-txt">
            전국
          </Link>
        </button>
        <button className="filterMap">
          <Link to="/MapList" className="filterMap-txt">
            <RiRoadMapLine />
          </Link>
        </button>
      </section>
      <section>
        {storeList !== null
          ? storeList.stores.map(
              (
                items,
                idx // 구조분해할당으로 리펙토링
              ) => (
                <Link
                  key={items.id}
                  to={"/storeDetailPage"}
                  state={{
                    storeData: storeList,
                  }}
                >
                  <StoreContainer key={items.id}>
                    <section className="storeInfo">
                      <div className="imgContainer">
                        <img src={items.image} alt="더미데이터" />
                      </div>
                      <div className="informationContainer">
                        <h3 className="title">{items.name}</h3>
                        <div className="address">{items.address}</div>
                        <div className="rating">{items.rating}</div>
                        <div className="starContainer">
                          <RiStarFill className="star" />
                          평점
                        </div>
                      </div>
                    </section>
                    <section className="storeReviewsInfo">
                      <div>{items.name}</div>
                      <div>{items.name}</div>
                      <div>{items.name}</div>
                    </section>
                  </StoreContainer>
                </Link>
              )
            )
          : null}
      </section>
      {/* early return */}
    </StoreList>
  );
};
const StoreList = styled.section`
  color: white;
  padding-top: 24px;
  h2 {
    margin-top: 28px;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0px;
  }

  .filterLocal {
    border: 1px solid #ffc700;
  }
  .filterLocal-txt {
    color: #ffc700;
  }

  .filterMap-txt {
    color: white;
    font-size: 15px;
  }

  .star {
    margin-right: 5px;
    color: yellow;
  }

  .storeReviewsInfo {
    margin-top: 6px;
    display: flex;
    color: white;
  }
  .storeReviewsInfo div {
    margin-right: 5px;
  }
`;

const StoreContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 12px;
  background-color: #504e4a;

  .storeInfo {
    display: flex;
  }
  .starContainer {
    margin-top: 10px;
  }
  .imgContainer {
    width: 96px;
    height: 96px;
    margin-right: 12px;

    img {
      border-radius: 3px;
      height: 100%;
    }
  }

  .informationContainer {
    color: white;
    padding: 10px 0px;

    .title {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .address {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .rating {
      font-size: 1.2rem;
    }

    section {
      display: flex;
    }
  }
`;

export default List;
