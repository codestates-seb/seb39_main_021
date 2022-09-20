import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [itemList, setItemList] = useState(null);

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
    <Maincontainer>
      <section className="categoryContainer">
        <h1>카테고리</h1>
        {itemList.map((category) => (
          <Link
            to={`${category.path}`}
            key={category.id}
            className="categoryItems"
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
    </Maincontainer>
  ) : null;
};

/*
  현재 catagory 와 인기게시물의 좌측 레이아웃이 맞지 않는 이유는 
  카테고리에 space-between 이 적용되어 아이탬들의 위치가 조정되었기 때문
  그래서 안맞아 보이지만 border 를 넣으면 레이아웃이 맞는걸 확인할 수 있다. 

  하지만 일부러 맞추기 위해 position 이나 tramsform 을 사용하면
  이 후 다른 기기에서는 대응이 안될 우려가 있어
  body 혹은 최상단에 태그에 padding 을 주려고 한다. 
  => 멘토님과 종렬님께 의견을 여쭤볼것.
  ==> 24px 로 맞출것.
*/

export default Home;

const Maincontainer = styled.main`
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
