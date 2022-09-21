import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
  // early return => 의도를 담기 위해 앞에서 if 문으로 리턴해도 좋다.
  // 실무에서 사용하는 방법.

  return (
    <StoreContainer>
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
    </StoreContainer>
  );
};

export default StoreDetail;

const StoreContainer = styled.main`
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
