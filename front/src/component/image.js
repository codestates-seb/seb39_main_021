import { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Image = () => {
  const fileInput = useRef();
  const [fileImageUrl, setFileImageUrl] = useState("");

  const handleReviewImage = () => {
    fileInput.current.click();
  };
  const deleteFileImage = () => {
    // URL.revokeObjectURL(fileImageUrl);
    // setFileImageUrl("");
  };

  const [fileImageData, setFileImageData] = useState();

  const handleReviewImageChange = (e) => {
    // console.log(e.target.files);
    // for (let i = 0; i < e.target.files.length; i++) {
    //   if (e.target.files[i]) {
    //     let render = new FileReader();
    //     render.readAsDataURL(e.target.files[i]);
    //     render.onloadend = () => {
    //       const base64 = render.result;
    //       //   console.log(base64);
    //       let base64Sub = base64.toString();
    //       if (base64) {
    //         setPreviewImg([...base64, base64Sub]);
    //       }
    //     };
    //   }
    // }
    // const uploadFile = e.target.files[0];
    // console.log(URL.createObjectURL(previewImg));
    // setFileImageUrl(URL.createObjectURL(previewImg));
    // if (previewImg) {
    //   const formData = new FormData();
    //   formData.append("files", previewImg);
    //   console.log(formData);
    //   axios({
    //     method: "post",
    //     url: "",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     data: formData,
    //   });
    //     }
  };
  const [deleteImg, setDeleteImg] = useState();
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
    console.log(imgView);
    console.log(previewImg);
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
          <span className="imgBox">
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
      {/* <img
          src={
            previewImg.length === 0
              ? "https://cdn.pixabay.com/photo/2017/08/01/00/01/map-2562138__340.jpg"
              : previewImg
          }
          alt="noImage"
        /> */}
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
