import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Button from "./Button";

const Image = () => {
  const fileInput = useRef();
  const [imageUrlList, setImageUrlList] = useState([]);

  const handleReviewImage = () => {
    fileInput.current.click();
  };

  const [previewImg, setPreviewImg] = useState([]);

  const handleInsertImg = (event) => {
    let render = new FileReader();

    if (event.target.files[0]) {
      render.readAsDataURL(event.target.files[0]);
    }
    render.onloadend = () => {
      const previewImgURL = render.result;

      if (previewImgURL) {
        setPreviewImg([...previewImg, previewImgURL]);
      }
    };

    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    axios({
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
      url: "https://gloom.loca.lt/v1/image/upload?type=REVIEW",
      method: "post",
      data: formData,
    })
      .then((info) => {
        setImageUrlList([...imageUrlList, info.data.urlList]);
      })
      .catch((err) => console.log(err));
  };

  const deleteImage = () => {
    axios({
      method: "delete",
      url: "https://gloom.loca.lt/v1/image",
      data: { urlList: imageUrlList[0] },
    }).catch((err) => console.log(err));
    setPreviewImg([]);
    console.log("이미지 URL : ", imageUrlList);
  };

  const deletePreviewImg = (index) => {
    const filter = imageUrlList.filter((image, idx) => idx !== index);
    const deleteFilter = imageUrlList.filter((image, idx) => idx === index);

    axios({
      url: "https://gloom.loca.lt/v1/image",
      method: "delete",
      data: { urlList: deleteFilter[0] },
    })
      .then(setImageUrlList(filter))
      .catch((err) => console.log(err));

    const imgView = previewImg.filter((img, imgIndex) => imgIndex !== index);
    setPreviewImg([...imgView]);
  };

  const getPreviewImg = () => {
    if (previewImg.length === 0) {
      return (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_b-7T0rzH4vDbjXDL_vttMylTsT7p44ajMPkTmPCJqM3DGSKz33pUhllrAe4PNlbm0ME&usqp=CAU"
          alt="이미지 없음"
          className="noneImg"
        />
      );
    } else {
      return previewImg.map((imgs, index) => {
        return (
          <span className="imgBox" key={index}>
            <img
              src={previewImg[index]}
              alt="사용자가 선택한 이미지"
              className="userImg"
            />
            <button onClick={() => deletePreviewImg(index)}>X</button>
          </span>
        );
      });
    }
  };

  return (
    <ImageContainer>
      <div className="imageTitle">사진</div>
      <div className="registrationImg-layout">{getPreviewImg()}</div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleInsertImg}
        ref={fileInput}
        accept="image/*"
        multiple="multiple"
      />
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
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.section`
  label {
    color: white;
    display: block;
  }
  .userImg {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
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
`;
