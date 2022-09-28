import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  RiRestaurant2Line,
  RiComputerLine,
  RiGasStationFill,
  RiStarFill,
} from "react-icons/ri";
import { GiLoveSong, GiMedicines, GiSittingDog } from "react-icons/gi";
import {
  MdOutlineLocalCafe,
  MdOutlineLocalHospital,
  MdOutlineLocalLaundryService,
  MdOutlineLocalConvenienceStore,
} from "react-icons/md";
import { BiStore, BiDotsHorizontal } from "react-icons/bi";

import Header from "./header";

const Home = () => {
  const [itemList, setItemList] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const imgArr = [
    RiRestaurant2Line,
    MdOutlineLocalCafe,
    GiSittingDog,
    GiMedicines,
    MdOutlineLocalHospital,
    GiLoveSong,
    MdOutlineLocalLaundryService,
    MdOutlineLocalConvenienceStore,
    RiComputerLine,
    RiGasStationFill,
    BiStore,
    BiDotsHorizontal,
    MdOutlineLocalCafe,
  ];
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
          {itemList.map((category, idx) => {
            const Icons = imgArr[idx];
            return (
              <Link
                key={category.id}
                className="categoryItems"
                to={"/list"}
                state={{
                  info: category,
                }}
              >
                <Icons className="iconsImage" />
                <h3>{category.title}</h3>
              </Link>
            );
          })}
        </section>

        <section className="popularPostsContainer">
          <h2>인기게시물</h2>
          {popularPosts.map((post) => (
            <div key={post.id} className="popularContainer">
              <img src={post.imageUrl} alt={post.imageDescription} />
              <h3>{post.title}</h3>
              <span>
                <RiStarFill className="star" />
                {post.rating}
              </span>
            </div>
          ))}
        </section>
      </MainContainer>
    </>
  ) : null;
};

export default Home;

const MainContainer = styled.main`
  padding: 20px 10px 0;
  border-top: 1px solid white;
  h1 {
    display: none;
  }
  h2 {
    color: white;
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
    color: white;
  }
  .categoryContainer img {
    width: 150px;
    height: 150px;
  }

  .popularPostsContainer {
    text-align: center;
    padding: 10px 0;
    width: 100%;
  }
  .popularContainer {
    width: 100%;
    border: 1px solid white;
    background-color: #76736e;
    margin: 30px 0;
    text-align: left;
  }
  .popularPostsContainer h2 {
    margin-bottom: 20px;
    text-align: left;
  }

  .popularPostsContainer img {
    width: 100%;
  }
  .iconsImage {
    font-size: 50px;
    height: 50px;
    color: white;
  }
  .star {
    color: #ffc700;
    margin-right: 5px;
  }
`;
