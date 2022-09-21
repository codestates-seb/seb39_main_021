import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Button from "../component/Button";
/*
    카테고리 선택 => 해당 카테고리 페이지로 이동
    => 리스트중 아이탬 선택 => axios 요청 
    ( url 은 업체 리스트에서 아디값(useParams)을 받아 와야한다? )
    => 이후 id 값 뒤에 추가 url 이 붙으면서 데이터를 받아오는게 좋을듯 싶은데,,,
*/

const StoreDetail = () => {
  const [storeItemDetail, setStoreItemDetail] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setStoreItemDetail(location.state.storeData.stores[0]);
  });

  return storeItemDetail !== null ? (
    <Stroecontainer>
      <section className="detailDataContainer">
        <div className="detailDataHeader">
          <h3>{storeItemDetail.name}</h3>
          <button>방문 확인하기</button>
        </div>
        <span className="storeDataAddress">주소</span>
        <p>{storeItemDetail.address}</p>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B8%B8%EC%B0%BE%EA%B8%B0"
          className="naverMap"
        >
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
        <div>
          <span className="reviewsLike">별{storeItemDetail.like}점</span>
          <span>전체 {storeItemDetail.Reviews}개</span>
        </div>
      </section>
    </Stroecontainer>
  ) : null;
};

export default StoreDetail;

const Stroecontainer = styled.main`
  margin: 20px 0;
  color: white;
  .detailDataHeader {
    display: flex;
    justify-content: space-between;
  }
  span {
    color: #76736e;
  }
  .storeDataAddress {
    display: inline-block;
    margin-top: 20px;
  }
  .naverMap {
    display: inline-block;
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
`;
