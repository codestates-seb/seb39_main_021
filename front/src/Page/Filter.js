import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "../component/Button";
import localList from "../DummyData/localList";
import Header from "../mainPage/header";

const LocalFilter = () => {
  const [local, setLocal] = useState("전국");
  const [area, setArea] = useState();
  const [filterResult, setFilterResult] = useState({
    local: "01",
    area: "000",
  });

  const [cities] = localList.filter((post) => post.city === local);
  const { area: targetArea } = cities;
  const submitLocal = area?.slice(0, 2);
  const submitArea = area?.slice(2, 5);

  //제출하기 눌렀을때의 함수
  const handleLocalFilterSubmit = () => {
    if (area != null) {
      setFilterResult({ local: submitLocal, area: submitArea });

      axios
        .post("", area)
        .then((res) => console.log(res))
        .catch();
    }
  };

  //초기화 눌렀을때의 함수
  const handleReset = () => {
    setArea("01000");
    setLocal("전국");
  };

  return (
    <FilterSection>
      <Header />
      <section>
        {/* <div> {local}</div> */}
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
              onClick={() => setLocal(post.city)}
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
              name={post.name}
              onClick={() => {
                setArea(post.id);
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
