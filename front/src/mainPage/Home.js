import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./header";

const Home = () => {
  const [itemList, setItemList] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const popularPosts = [
    {
      id: "1",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "WORKS.D 댄스 연습실 송파점",
      rating: "4.9점",
    },
    {
      id: "2",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "222WORKS.D 댄스 연습실 송파점",
      rating: "3.9점",
    },
    {
      id: "3",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      imageDescription: "아무사진 1",
      title: "WORKS.D 댄스 연습실 송파점333",
      rating: "2.9점",
    },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:4000/items")
      .then((data) => setItemList(data.data));
  }, []);

  return itemList !== null ? (
    <>
      <Header toggleMenu={toggleMenu} openMenu={openMenu} />
      <MainContainer>
        <section className="categoryContainer">
          <h1>카테고리</h1>
          {itemList.map((category) => (
            <Link
              key={category.id}
              className="categoryItems"
              to={"/list"}
              state={{
                info: category,
              }}
            >
              <img src={category.imageUrl} alt="무언가" />
              <h3>{category.title}</h3>
            </Link>
          ))}
        </section>

        <section className="popularPostsContainer">
          <h2>인기게시물</h2>
          {popularPosts.map((post) => (
            <div key={post.id}>
              <img src={post.imageUrl} alt={post.imageDescription} />
              <h3>{post.title}</h3>
              <span>{post.rating}</span>
            </div>
          ))}
        </section>
      </MainContainer>
    </>
  ) : null;
};

/*
  현재 category 와 인기게시물의 좌측 레이아웃이 맞지 않는 이유는 
  카테고리에 space-between 이 적용되어 아이탬들의 위치가 조정되었기 때문
  그래서 안맞아 보이지만 border 를 넣으면 레이아웃이 맞는걸 확인할 수 있다. 

  하지만 일부러 맞추기 위해 position 이나 transform 을 사용하면
  이 후 다른 기기에서는 대응이 안될 우려가 있어
  body 혹은 최상단에 태그에 padding 을 주려고 한다. 
  => 멘토님과 종렬님께 의견을 여쭤볼것.
  ==> 24px 로 맞출것.
*/

export default Home;

const MainContainer = styled.main`
  padding: 20px 10px 0;
  border-top: 1px solid white;
  h1 {
    display: none;
  }
  .categoryContainer {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .categoryItems {
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
  }
  .categoryItems h3 {
    margin-top: 5px;
  }
  .categoryContainer img {
    width: 150px;
    height: 150px;
  }

  .popularPostsContainer {
    text-align: center;
    padding-bottom: 10px;
  }

  .popularPostsContainer h2 {
    margin-bottom: 20px;
    text-align: left;
  }

  .popularPostsContainer img {
    width: 150px;
  }
`;
