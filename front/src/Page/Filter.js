import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../component/Button";
import localList from "../DummyData/localList";
import Header from "./Header";

const LocalFilter = ({ selectData, setSelectData }) => {
  const [fullId, setFullId] = useState("01000");
  const [local, setLocal] = useState("전국");
  const [area, setArea] = useState("전체보기");
  const [filtered, setFiltered] = useState(false);

  const [cities] = localList.filter((post) => post.city === local);
  const { area: targetArea } = cities;
  const submitLocal = fullId?.slice(0, 2);
  const submitArea = fullId?.slice(2, 5);

  //설정하기 눌렀을때의 함수
  const handleLocalFilterSubmit = () => {
    setFiltered(true);
    if (fullId != null) {
      setSelectData({
        ...selectData,
        filter: {
          local: local,
          localId: submitLocal,
          area: area,
          areaId: submitArea,
        },
      });
    }
  };

  //초기화 눌렀을때의 함수
  const handleReset = () => {
    setFiltered(false);
    setSelectData({
      ...selectData,
      filter: {
        local: "전국",
        localId: "01",
        area: "전체",
        areaId: "000",
      },
    });
  };

  console.log(selectData);

  return (
    <FilterSection>
      <Header />
      <section>
        {filtered === false ? (
          <div>전국</div>
        ) : local === "전국" ? (
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
      <section className="filter">
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
          <div></div>
        </AreaFilterSection>
      </section>
      <section className="buttonSection">
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

  .buttonSection {
    background-color: #303134;
    position: fixed;
    bottom: 0px;
    width: 89%;
    padding: 50px 0px;
  }

  section {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  div {
    margin-top: 12px;
    display: flex;
  }

  .buttonStyle {
    color: white;
    height: 30px;
    width: 100%;
  }
  .buttonStyle:focus {
    background-color: white;
    color: black;
  }
`;
const LocalFilterSection = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 1px solid black;
`;

const AreaFilterSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  overflow-y: scroll;
  flex-wrap: nowrap;

  div {
    height: 100px;
  }
`;
export default LocalFilter;
