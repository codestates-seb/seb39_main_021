import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../component/Button";
import localList from "../DummyData/localList";
import Header from "../mainPage/header";

const LocalFilter = ({ filter, setFilter }) => {
  const [fullId, setFullId] = useState("01000");
  const [local, setLocal] = useState("전국");
  const [area, setArea] = useState("전체보기");

  const [cities] = localList.filter((post) => post.city === local);
  const { area: targetArea } = cities;
  const submitLocal = fullId?.slice(0, 2);
  const submitArea = fullId?.slice(2, 5);

  //제출하기 눌렀을때의 함수
  const handleLocalFilterSubmit = () => {
    if (fullId != null) {
      setFilter({
        local: local,
        localId: submitLocal,
        area: area,
        areaId: submitArea,
      });
    }
  };

  //초기화 눌렀을때의 함수
  const handleReset = () => {
    setFilter({
      local: "전국",
      localId: "01",
      area: "전체",
      areaId: "000",
    });
  };

  return (
    <FilterSection>
      <Header />
      <section>
        {local === "전국" ? (
          <div>{local}</div>
        ) : (
          <div>
            {local} {area}
          </div>
        )}
        <Link to="/list" state={{ info: local }}>
          검색 적용하기
        </Link>
      </section>
      <section>
        <LocalFilterSection>
          {localList.map((post) => (
            <button
              className="buttonStyle"
              key={post.id}
              onClick={() => {
                setLocal(post.city);
                setArea("");
              }}
            >
              {post.city}
            </button>
          ))}
        </LocalFilterSection>
        <AreaFilterSection>
          {targetArea?.map((post) => (
            //undefined, null 을 체크할때는 == 만 사용한다.
            //data == null => null 또는 undefined 를 같이 찾는다.
            <button
              className="buttonStyle"
              key={post.id}
              onClick={() => {
                setFullId(post.id);
                setArea(post.name);
              }}
            >
              {post.name}
            </button>
          ))}
        </AreaFilterSection>
      </section>
      <section>
        <Button width="100px" onClick={handleReset}>
          초기화
        </Button>
        <Button width="220px" onClick={handleLocalFilterSubmit}>
          설정하기
        </Button>
      </section>
    </FilterSection>
  );
};

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;

  section {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .buttonStyle:focus {
    background-color: white;
  }
`;
const LocalFilterSection = styled.section`
  width: 50%;
  border: 1px solid white;

  display: flex;
  flex-direction: column;
`;

const AreaFilterSection = styled.section`
  border: 1px solid blue;
  width: 50%;

  display: flex;
  flex-direction: column;
`;
export default LocalFilter;
