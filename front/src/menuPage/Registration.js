import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import Header from "../mainPage/header";
import Image from "../component/image";

const Registration = () => {
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const handleRegistration = () => {
    axios
      .get(
        "https://bizno.net/api/fapi?key=eWhqMDQzOUBuYXZlci5jb20g&gb=1&q=3988701116"
      )
      .then((data) => console.log(data));
  };

  // const handleImageUpload = (e) => {
  //   console.log(e.target.files);
  // };
  return (
    <>
      <Header />
      <RegistrationContainer>
        <label htmlFor="category">카테고리</label>
        <select id="category">
          <option>선택해 주세요</option>
          <option>음식점</option>
          <option>카페</option>
          <option>동물병원</option>
          <option>약국</option>
          <option>병원</option>
          <option>노래방</option>
          <option>세탁방</option>
          <option>편의점</option>
          <option>pc방</option>
          <option>주유소</option>
          <option>무인 판매점</option>
          <option>기타 등등</option>
        </select>
        <label htmlFor="registrationNumber">사업자 등록번호</label>
        <input
          placeholder="- 없이 숫자만 작성해 주세요"
          id="registrationNumber"
        />
        <button className="registrationCheckBtn" onClick={handleRegistration}>
          확인하기
        </button>
        <label htmlFor="registrationName">사업장 이름</label>
        <input id="registrationName" />
        <label htmlFor="registrationAddress">사업장 주소</label>
        <input id="registrationAddress" />
        <label htmlFor="registrationTxt">상세 설명</label>
        <textarea id="registrationTxt" />
        <label htmlFor="imageUpload">이미지</label>
        <Image />
      </RegistrationContainer>
      ;
    </>
  );
};

export default Registration;

const RegistrationContainer = styled.main`
  label {
    display: block;
    color: white;
    margin: 20px 0 10px;
  }
  label::after {
    content: "*";
    color: red;
  }
  select {
    background-color: #76736e;
    color: white;
    width: 70%;
    padding: 10px 5px;
  }
  option {
    color: white;
    background-color: #76736e;
  }
  input {
    padding: 10px 5px;
    width: 70%;
    border: #76736e;
    color: white;
    background-color: #76736e;
  }
  .registrationCheckBtn {
    margin-left: 10px;
    font-size: 10px;
    font-weight: bold;
    padding: 10px;
    border-radius: 3px;
    background-color: var(--mainYellow);
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px 5px;
    border: #76736e;
    background-color: #76736e;
    color: white;
  }
`;
