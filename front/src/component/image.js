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
    URL.revokeObjectURL(fileImageUrl);
    setFileImageUrl("");
  };

  const [fileImageData, setFileImageData] = useState();

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
    <>
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
    </>
  );
};

export default Image;
