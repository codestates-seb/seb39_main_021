import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../component/Button";

import Image from "../component/Image";
import Header from "./Header";

const RegistrationDetail = () => {
  const [information, setInformation] = useState({});
  const [changedInformation, setChangedInformation] = useState({
    memberId: null,
    name: null,
    detail: null,
    imageList: [],
  });

  useEffect(() => {
    axios
      .get(`https://gloom.loca.lt/v1/shop/4`)
      //   해당 아이디를 찾으려면 로그인이 된 상태 아니면 클릭을 해서 페이지 이동할 때 데이터를 받아와서 id 가 일치하는걸 뿌려줘야 하는데,, 둘 다 안되어 있음.
      .then((info) => setInformation(info.data))
      .then((info) =>
        setChangedInformation({
          memberId: info.id,
          name: info.name,
          detail: info.detail,
          imageList: [info.imageList[0], info.imageList[1], info.imageList[2]],
        })
      );
  }, []);

  // console.log(changedInformation);

  const handleShopInfoChange = () => {
    axios
      .patch(`https://gloom.loca.lt/v1/shop/4`, changedInformation)
      .then((result) => console.log(result));
  };

  const handleDetailChange = (detailContent) => {
    console.log(detailContent.target.value);
    setChangedInformation({
      ...changedInformation,
      detail: detailContent.target.value,
    });
  };

  const handleNameChange = (nameContent) => {
    console.log(nameContent.target.value);
    setChangedInformation({
      ...changedInformation,
      name: nameContent.target.value,
    });
  };

  const handleImageChange = (imageContent) => {
    setChangedInformation({
      ...changedInformation,
      image: imageContent.target.value,
    });
  };

  if (information === null) {
    return;
  }

  return (
    <Container>
      <Header />
      <section>
        <h2>나의 사업장</h2>
      </section>
      <ChangeableStoreInfoContainer>
        <h3> 사업장 이름</h3>
        <input
          onChange={handleNameChange}
          placeholder={information.name}
        ></input>
        {/* <h3>카테고리</h3>
        <div>{information.category}</div> */}
        {/* <h3>사업자등록번호</h3>
        <div>{information.number}</div> */}
        <h3>상세설명</h3>
        <input
          onChange={handleDetailChange}
          placeholder={information.detail}
        ></input>
      </ChangeableStoreInfoContainer>
      <ImmutableStoreInfoContainer>
        <h3>주소</h3>
        <div>{information.address}</div>
      </ImmutableStoreInfoContainer>
      <ChangeableStoreInfoContainer>
        <h3>사진</h3>
        <button>수정하기</button>
        {information.imageList != null ? (
          <section>
            <image src={information.imageList[0]} />
            <image src={information.imageList[1]} />
            <image src={information.imageList[2]} />
          </section>
        ) : null}
        <Image />
      </ChangeableStoreInfoContainer>
      <Button width="100%" onClick={handleShopInfoChange}>
        수정하기
      </Button>
    </Container>
  );
};

export default RegistrationDetail;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 14px;

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

  div {
    font-size: 1.4rem;
    margin-top: 10px;
    font-weight: 700;
    color: #fff;
  }
`;
const ChangeableStoreInfoContainer = styled.section`
  h3 {
    font-size: 1.4rem;
    margin-top: 24px;
    font-weight: 400;
    color: #76736e;
  }

  input {
    width: auto;
    margin-top: 10px;
    font-weight: 700;
  }
`;
