import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiRoadMapLine } from "react-icons/ri";

import Header from "./Header";
import { ReactComponent as Star } from "../asset/star.svg";

const List = ({ selectData }) => {
  // const [storeData, setStoreData] = useState(null);
  const [storeData, setStoreData] = useState([{ id: 1, images: [] }]);

  useEffect(() => {
    axios
      .get(
        `https://gloom.loca.lt/v1/shop?page=1&size=10&cityId=${selectData.filter.localId}&areaId=${selectData.filter.areaId}&category=${selectData.category}&sort=1`
      )
      .then((filterData) => {
        console.log(filterData.data.data);
        setStoreData(filterData.data.data);
      });
  }, []);

  if (storeData == null) {
    return;
  }
  return (
    <section>
      <Header />
      <StoreData>
        {selectData !== null && <h2> {selectData.category} </h2>}
        <section className="buttonContainer">
          <button className="filterLocal">
            <Link to="/LocalFilter" className="filterLocal-txt">
              {selectData.filter.local} {selectData.filter.area}
            </Link>
          </button>
          <button className="filterMap">
            <Link
              to="/map"
              className="filterMap-txt"
              state={{ data: storeData }}
            >
              <RiRoadMapLine />
            </Link>
          </button>
        </section>
        <section>
          {storeData !== null
            ? storeData?.map((individualStore) => (
                <Link
                  key={individualStore.id}
                  to={"/storeDetailPage"}
                  state={{
                    storeData: individualStore.id,
                  }}
                >
                  <StoreContainer key={individualStore.id}>
                    <section>
                      <div className="imgContainer">
                        <img src={individualStore.images[0]} alt="더미데이터" />
                      </div>
                      <div className="informationContainer">
                        <h3 className="title">이름 : {individualStore.name}</h3>
                        <div className="address">
                          주소 : {individualStore.address}
                        </div>
                        <div className="rating">
                          <Star fill="#FFC700" width="10px" />
                          <div>132 {individualStore.ratingAVG}</div>
                        </div>
                      </div>
                    </section>
                    <section className="verificationContainer">
                      <div>전체리뷰수{individualStore.reviewCount}</div>
                      <div>방문한 회원수{individualStore.visitorCount}</div>
                      <div>열려있어요{individualStore.openCount}</div>
                    </section>
                  </StoreContainer>
                </Link>
              ))
            : null}
        </section>
      </StoreData>
    </section>
  );
};

const StoreData = styled.section`
  color: white;
  padding: 0px 24px;
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
    border-radius: 5px;
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

  section {
    display: flex;
  }

  .imgContainer {
    width: 96px;
    height: 96px;
    margin-right: 12px;
    img {
      border-radius: 5px;
      height: 100%;
    }
  }
  .informationContainer {
    color: white;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 1.6rem;
      font-weight: 700;
    }
    .address {
      font-size: 1.2rem;
      margin-bottom: 13px;
    }
    .rating {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      div {
        padding: 2px 0px 0px 3px;
        text-align: center;
      }
    }
  }

  .verificationContainer {
    display: flex;
    justify-content: space-between;
  }
`;

export default List;
