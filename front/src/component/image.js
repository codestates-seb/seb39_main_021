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
<<<<<<< HEAD
          className="noneImg"
=======
>>>>>>> a9f8246b8a9052035771ca721012b882cbbf4730
        />
      );
    } else {
      return previewImg.map((imgs, index) => {
        return (
          <span className="imgBox" key={index}>
<<<<<<< HEAD
            <img
              src={previewImg[index]}
              alt="사용자가 선택한 이미지"
              className="userImg"
            />
=======
            <img src={previewImg[index]} alt="사용자가 선택한 이미지" />
>>>>>>> a9f8246b8a9052035771ca721012b882cbbf4730
            <button onClick={() => deletePreviewImg(index)}>X</button>
          </span>
        );
      });
    }
  };

  return (
    <ImageContainer>
<<<<<<< HEAD
      <div className="imageTitle">사진</div>
      <div className="registrationImg-layout">{getPreviewImg()}</div>
=======
      <div>사진</div>
      {getPreviewImg()}
>>>>>>> a9f8246b8a9052035771ca721012b882cbbf4730
      <input
        style={{ display: "none" }}
        type="file"
        onChange={insertImg}
        ref={fileInput}
        accept="image/*"
        multiple="multiple"
      />
<<<<<<< HEAD
      <div className="imageBtn">
        <Button
          onClick={handleReviewImage}
          className="registrationImg"
          buttonStyle="main"
          width="150px"
        >
          이미지 등록하기
        </Button>
        <Button onClick={deleteImage} buttonStyle="main" width="150px">
          전체 삭제
        </Button>
      </div>
=======
      <button onClick={handleReviewImage}> 이미지 등록하기 </button>
      <button onClick={deleteImage}> 삭제 </button>
>>>>>>> a9f8246b8a9052035771ca721012b882cbbf4730
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.section`
  label {
    color: white;
    display: block;
  }
<<<<<<< HEAD
  .noneImg {
    display: inline-block;
    width: 98px;
  }
  .imgBox {
    display: flex;
    align-items: flex-start;
    margin: 10px 10px 10px 0;
  }
  .registrationImg-layout {
    display: flex;
  }
  .imgBox button {
    color: white;
  }
  .imageTitle {
    margin: 10px 0;
  }
  .imageBtn {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .registrationImg {
    background-color: #ffc700;
  }
  .userImg {
    display: inline-block;
    width: 50px;
    height: 50px;
=======
  img {
    width: 200px;
    height: 100px;
  }
  .imgBox {
    margin-right: 10px;
>>>>>>> a9f8246b8a9052035771ca721012b882cbbf4730
  }
`;
