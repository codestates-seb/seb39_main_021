import { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../component/Button";

const LocalFilter = () => {
  const [local, setLocal] = useState("전국");
  const [area, setArea] = useState();
  const [selectLocalArea, setSelectLocalArea] = useState();
  const [localFilterValue, setLocalFilterValue] = useState({
    city: "",
    area: "",
  });

  const [cities] = localList.filter((post) => post.city === local);
  const { area: targetArea } = cities;
  // 선언적 프로그래밍
  useEffect(() => {
    setSelectLocalArea(targetArea);
  }, []);

  useEffect(() => {
    setLocalFilterValue({
      city: local,
    });
  }, [local]);

  useEffect(() => {
    setLocalFilterValue({
      city: local,
      area: area,
    });
  }, [area]);

  const localList = [
    {
      id: 1,
      city: "전국",
    },
    {
      id: 2,
      city: "서울",
      area: ["강남구", "강동구", "송파구"],
    },
    {
      id: 3,
      city: "부산",
      area: ["q", "w", "e"],
    },
    {
      id: 4,
      city: "경기",
      area: ["1", "2", "3", "4", "5", "6"],
    },
  ];

  //제출하기 눌렀을때의 함수
  const handleLocalFilterSubmit = () => {};

  //초기화 눌렀을때의 함수
  const handleReset = () => {
    setLocalFilterValue({
      city: "전국",
    });
  };

  // console.log(local);
  // console.log(area);
  // console.log(localFilterValue);
  // console.log(selectLocalArea);

  return (
    <FilterSection>
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
          {selectLocalArea?.map((post) => (
            //undefined, null 을 체크할때는 == 만 사용한다.
            //data == null => null 또는 undefined 를 같이 찾는다.
            <button
              className="buttonStyle"
              key={post.index}
              onClick={() => {
                setArea(post);
              }}
            >
              {post}
            </button>
          ))}
        </AreaFilterSection>
      </section>
      <section>
        <Button width="100px" onClick={handleReset}>
          초기화
        </Button>
        <Button width="220px">제출하기</Button>
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