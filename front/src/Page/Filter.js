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
    <section>
      <Header />
      <FilterSection style={{ height: `${window.innerHeight - 47}px` }}>
        <section className="filterButton">
          {filtered === false ? (
            <div>전국</div>
          ) : local === "전국" ? (
            <div>{local}</div>
          ) : (
            <div>
              {local} {area}
            </div>
          )}
        </section>
        <section className="filterValue">
          <div>
            {localList.map((post) => {
              return (
                <button
                  className="buttonStyle"
                  key={post.id}
                  onClick={() => {
                    setFiltered(false);
                    setLocal(post.city);
                    setArea("");
                  }}
                >
                  {post.city}
                </button>
              );
            })}
          </div>
          <div>
            {targetArea?.map((post) => {
              return (
                <button
                  className="buttonStyle"
                  key={post.id}
                  onClick={() => {
                    setFullId(post.id);
                    setArea(post.name);
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
                  }}
                >
                  {post.name}
                </button>
              );
            })}
            <div></div>
          </div>
        </section>
        <section className="buttonSection">
          <Button width="100px" onClick={handleReset}>
            초기화
          </Button>
          <Link to="/list" state={{ info: local }}>
            <Button
              buttonStyle="main"
              padding="3px 0px"
              width="220px"
              onClick={handleLocalFilterSubmit}
            >
              설정하기
            </Button>
          </Link>
        </section>
      </FilterSection>
    </section>
  );
};

const FilterSection = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;

  .filterButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;

    div {
      color: #ffc700;
      border: 1px solid #ffc700;
      padding: 3px 10px;
      border-radius: 5px;
    }
  }

  .filterValue {
    display: flex;
    height: 696px;

    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      background-color: #504e4a;
      border-left: 1px solid #303134;

      button {
        height: 24px;
        color: #fff;
        background-color: #504e4a;
      }
      button:active {
        color: #000;
        background-color: #ffc700;
      }
    }
  }

  .buttonSection {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
  }
`;

export default LocalFilter;
