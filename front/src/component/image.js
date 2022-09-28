import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Button from "./Button";

const Image = () => {
  const fileInput = useRef();
  //   const [fileImageUrl, setFileImageUrl] = useState("");

  const handleReviewImage = () => {
    fileInput.current.click();
  };

  //   const [deleteImg, setDeleteImg] = useState();
  const [previewImg, setPreviewImg] = useState([]);

  const insertImg = (e) => {
    let render = new FileReader();

    if (e.target.files[0]) {
      render.readAsDataURL(e.target.files[0]);
    }
    render.onloadend = () => {
      const previewImgURL = render.result;

      if (previewImgURL) {
        setPreviewImg([...previewImg, previewImgURL]);
      }
    };
  };

  const deleteImage = () => {
    setPreviewImg([]);
  };

  const deletePreviewImg = (index) => {
    const imgView = previewImg.filter((img, imgIndex) => imgIndex !== index);
    setPreviewImg([...imgView]);
  };

  const getPreviewImg = () => {
    if (previewImg.length === 0) {
      return (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_b-7T0rzH4vDbjXDL_vttMylTsT7p44ajMPkTmPCJqM3DGSKz33pUhllrAe4PNlbm0ME&usqp=CAU"
          alt="이미지 없음"
        />
      );
    } else {
      return previewImg.map((imgs, index) => {
        return (
          <span className="imgBox" key={index}>
            <img src={previewImg[index]} alt="사용자가 선택한 이미지" />
            <button onClick={() => deletePreviewImg(index)}>X</button>
          </span>
        );
      });
    }
  };

  return (
    <ImageContainer>
      <div>사진</div>
      {getPreviewImg()}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={insertImg}
        ref={fileInput}
        accept="image/*"
        multiple="multiple"
      />
      <button onClick={handleReviewImage}> 이미지 등록하기 </button>
      <button onClick={deleteImage}> 삭제 </button>
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.section`
  label {
    color: white;
    display: block;
  }
  img {
    width: 200px;
    height: 100px;
  }
  .imgBox {
    margin-right: 10px;
  }
`;
