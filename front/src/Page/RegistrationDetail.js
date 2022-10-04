import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../component/Button";

import Image from "../component/Image";
import Header from "./Header";

const RegistrationDetail = () => {
  const [information, setInformation] = useState({
    name: "ddd",
    category: "ddddd",
    number: "123",
    address: "seoul",
    detail: "djsnaknfkjaskfjb",
  });

  useEffect(() => {
    axios
      .get
      // `https://gloom.loca.lt/v1/shop/7`
      //   해당 아이디를 찾으려면 로그인이 된 상태 아니면 클릭을 해서 페이지 이동할 때 데이터를 받아와서 id 가 일치하는걸 뿌려줘야 하는데,, 둘 다 안되어 있음.
      ()
      .then((info) => setInformation(info))
      .then((info) => console.log(info));
  }, []);
  if (information === null) {
    return;
  }
  console.log(information);
  return (
    <Container>
      <Header />
      <section>
        <h2>나의 사업장</h2>
      </section>
      <ImmutableStoreInfoContainer>
        <h3> 사업장 이름</h3>
        <div>{information.name}</div>
        <h3>카테고리</h3>
        <div>{information.category}</div>
        <h3>사업자등록번호</h3>
        <div>{information.number}</div>
      </ImmutableStoreInfoContainer>
      <ChangeableStoreInfoContainer>
        <h3>상세설명</h3>
        <input placeholder={information.detail}></input>
        <h3>주소</h3>
        <input placeholder={information.address}></input>
        <Image />
      </ChangeableStoreInfoContainer>
      <Button>수정하기</Button>
    </Container>
  );
};

export default RegistrationDetail;

const Container = styled.article`
  h2 {
    font-size: 1.8rem;
    margin-top: 24px;
    color: #ffc700;
  }
`;

const ImmutableStoreInfoContainer = styled.section`
  h3 {
    font-size: 1.4rem;
    margin-top: 24px;
    font-weight: 400;
    color: #76736e;
  }
`;
const ChangeableStoreInfoContainer = styled.section`
  h3 {
    font-size: 1.4rem;
    margin-top: 24px;
    font-weight: 400;
    color: #76736e;
  }
`;
