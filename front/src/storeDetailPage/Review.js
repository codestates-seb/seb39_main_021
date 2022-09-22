import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../component/Button";

const Review = () => {
  const fileInput = useRef();
  const [fileImage, setFileImage] = useState("");

  const handleReviewImage = () => {
    fileInput.current.click();
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const handleReviewImageChange = (e) => {
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div>상호</div>
      <div></div>
      <div>일시</div>
      <div>장소가 열려있었나요?</div>
      <section>
        <button>예</button>
        <button>아니오</button>
      </section>
      <div>별점</div>
      <section>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
        <div>star</div>
      </section>
      <div>사진</div>
      <div>{fileImage && <img src={fileImage} alt="test" />}</div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleReviewImageChange}
        ref={fileInput}
        accept="image/*"
      />
      <button onClick={handleReviewImage}> 이미지 등록하기 </button>
      <button onClick={deleteFileImage}> 삭제 </button>
      <div>후기</div>
      <input></input>
      <Button> 등록하기 </Button>
    </div>
  );
};

export default Review;
