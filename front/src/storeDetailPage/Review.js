import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Button from "../component/Button";

const Review = () => {
  const fileInput = useRef();
  const [fileImageUrl, setFileImageUrl] = useState("");
  const [fileImageData, setFileImageData] = useState();

  const handleReviewImage = () => {
    fileInput.current.click();
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImageUrl);
    setFileImageUrl("");
  };

  const handleReviewImageChange = (e) => {
    const uploadFile = e.target.files[0];
    console.log(uploadFile);
    console.log(URL.createObjectURL(uploadFile));
    setFileImageUrl(URL.createObjectURL(uploadFile));

    if (uploadFile) {
      const formData = new FormData();
      formData.append("files", uploadFile);

      console.log(formData);

      axios({
        method: "post",
        url: "",
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
        data: formData,
      });
    }
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
      <div>{fileImageUrl && <img src={fileImageUrl} alt="test" />}</div>
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
