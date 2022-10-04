import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import categoryList from "../DummyData/categoryList";

const List = ({ selectData }) => {
  const [storeData, setStoreData] = useState(null);
  const location = useLocation();
  console.log(location);
  const categoryName = location.state.categoryInfo;

  // 1. filter된 값들을 요청보낸다 (기본값 : 전국) - 종렬
  // 2. 서버에서 받은 값을 storeData 로 저장한다. - 종렬
  useEffect(() => {
    axios
      .get(
        `https://gloom.loca.lt/v1/shop?page=1&size=10&cityId=02&areaId=008&category=${categoryName}&sort=1`
      )
      .then((filterData) => setStoreData(filterData.data.data));
  }, []);

  if (storeData === null) {
    return;
  }

  return (
    <StoreData>
      <Header />
      {selectData !== null && <h2> {selectData.category} </h2>}
      <section className="buttonContainer">
        <button className="filterLocal">
          <Link to="/LocalFilter" className="filterLocal-txt">
            {selectData.filter.local} {selectData.filter.area}
          </Link>
        </button>
        <button className="filterMap">
          <Link to="/MapList" className="filterMap-txt">
            {/* <RiRoadMapLine /> */}
          </Link>
        </button>
      </section>
      <section>
        {storeData !== null
          ? storeData?.map(
              (
                individualStore,
                idx // 구조분해할당으로 리펙토링
              ) => (
                <Link
                  key={individualStore.id}
                  to={"/storeDetailPage"}
                  state={{
                    storeData: storeData,
                  }}
                >
                  <StoreContainer key={individualStore.id}>
                    <div className="imgContainer">
                      <img src={individualStore.images[0]} alt="더미데이터" />
                      {/* 이미지 있는지 확인해볼것. */}
                    </div>
                    <div className="informationContainer">
                      <h3 className="title">상호명{individualStore.name}</h3>
                      <div className="address">
                        주소:{individualStore.address}
                      </div>
                      <div className="rating">
                        별{individualStore.ratingAVG}
                      </div>
                    </div>
                    <section>
                      <div>전체리뷰수{individualStore.reviewCount}</div>
                      <div>방문한 회원수{individualStore.visitorCount}</div>
                      <div>열려있어요{individualStore.openCount}</div>
                    </section>
                  </StoreContainer>
                </Link>
              )
            )
          : null}
      </section>
    </StoreData>
  );
};

const StoreData = styled.section`
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
    display: flex;
    align-items: center;
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
