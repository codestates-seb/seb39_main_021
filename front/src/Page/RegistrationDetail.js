import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "./Header";

const RegistrationDetail = () => {
  const [information, setInformation] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/v1/shop/{shop-id}`,
      //   해당 아이디를 찾으려면 로그인이 된 상태 아니면 클릭을 해서 페이지 이동할 때 데이터를 받아와서 id 가 일치하는걸 뿌려줘야 하는데,, 둘 다 안되어 있음.
    })
      .then((list) => setInformation(list.data.data))
      .then((test) => console.log(test));
  }, []);
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default RegistrationDetail;

const Container = styled.article``;
