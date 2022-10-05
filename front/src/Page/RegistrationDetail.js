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
  const shopId = 1;

  // registeredImage 에 이미지 넣는 코드 필요
  const registeredImage = [
    "https://item.kakaocdn.net/do/6bd1e4f0a9b84a0d58b0bee30e78d6dc8f324a0b9c48f77dbce3a43bd11ce785",
    "https://item.kakaocdn.net/do/6bd1e4f0a9b84a0d58b0bee30e78d6dcb3a18fdf58bc66ec3f4b6084b7d0b570",
    "https://item.kakaocdn.net/do/6bd1e4f0a9b84a0d58b0bee30e78d6dcb3a18fdf58bc66ec3f4b6084b7d0b570",
  ];

  useEffect(() => {
    axios
      .get(`https://gloom.loca.lt/v1/shop/1`)
      //   해당 아이디를 찾으려면 로그인이 된 상태 아니면 클릭을 해서 페이지 이동할 때 데이터를 받아와서 id 가 일치하는걸 뿌려줘야 하는데,, 둘 다 안되어 있음.
      .then((info) => {
        console.log(info.data);
        setInformation(info.data);
        setChangedInformation({
          memberId: info.data.id,
          name: info.data.name,
          detail: info.data.detail,
          imageList: info.data.images,
        });
      });
  }, []);

  const handleShopInfoChange = () => {
    axios
      .patch(`https://gloom.loca.lt/v1/shop/${shopId}`, changedInformation)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
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

  // 이미지파일을 수정하고, 서버로 patch요청을 보내는 함수
  const handleImageChange = (imageContent) => {
    setChangedInformation({
      ...changedInformation,
      image: imageContent.target.value,
    });
  };

  // 시간 남으면 모달창으로 구현
  const handleShopDelete = () => {
    axios
      .delete(`https://gloom.loca.lt/v1/shop/${shopId}`)
      .then((result) => console.log(result));
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
        {information.imageList != null ? (
          <section>
            <button>수정하기</button>
            <div>
              <image src={information.imageList[0]} />
              <image src={information.imageList[1]} />
              <image src={information.imageList[2]} />
            </div>
          </section>
        ) : null}
        <Image registeredImage={registeredImage} />
      </ChangeableStoreInfoContainer>
      <Button width="100%" onClick={handleShopInfoChange}>
        수정하기
      </Button>
      <Button width="100%" onClick={handleShopDelete}>
        삭제하기
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

  button {
    margin-top: 10px;
  }

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
    width: 80%;
    margin-top: 10px;
    font-weight: 700;
  }
`;
