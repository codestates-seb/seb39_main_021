import styled from "styled-components";
import { useEffect, useState } from "react";
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
  const location = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:4000/items")
      .then(() => setStoreItemDetail(location.state.cafeItemList[0]));
  });
  console.log(storeItemDetail);

  return (
    <Stroecontainer>
      {storeItemDetail !== null ? (
        <section>
          <div>
            <h3>{storeItemDetail.name}</h3>
            <button>방문 확인하기</button>
          </div>
          <span>주소</span>
          <p>{storeItemDetail.address}</p>
          <a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B8%B8%EC%B0%BE%EA%B8%B0">
            네이버 지도로 길찾기
          </a>
          <div>지도</div>
          <span>상세설명</span>
          <p>{storeItemDetail.txt}</p>
        </section>
      ) : null}
    </Stroecontainer>
  );
};

export default StoreDetail;

const Stroecontainer = styled.main``;
