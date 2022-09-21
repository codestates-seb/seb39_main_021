import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Cafe = () => {
  const [cafeList, setCafeList] = useState(null);
  // const { params } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:4000/items")
      .then((data) => setCafeList(data.data[1].stores));
  }, []);
  console.log(cafeList);
  return (
    <CafeContainer>
      {cafeList !== null
        ? cafeList.map((cafeItemList) => {
            return (
              <Link
                key={cafeItemList.id}
                to={`/storeDetail`}
                state={{
                  cafeItemList: cafeList,
                }}
              >
                <img src={cafeItemList.image} alt="더미이미지" />
                <div>
                  <h3>{cafeItemList.name}</h3>
                  <p>{cafeItemList.address}</p>
                  <span>별{cafeItemList.like}점</span>
                </div>
              </Link>
            );
          })
        : null}
    </CafeContainer>
  );
};

export default Cafe;

const CafeContainer = styled.main``;
