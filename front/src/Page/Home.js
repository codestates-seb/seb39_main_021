import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { RiStarFill } from "react-icons/ri";

import Header from "./Header";
import categoryList from "../DummyData/categoryList";

const Home = ({ selectData, setSelectData }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} openMenu={openMenu} />
      <MainContainer>
        <section className="categoryContainer">
          <h1>카테고리</h1>
          {categoryList.map((category, index) => {
            const Icons = category.icon;
            return (
              <Link
                key={index}
                className="categoryItems"
                to={"/list"}
                onClick={() => {
                  setSelectData({
                    ...selectData,
                    category: category.name,
                  });
                }}
                state={{
                  categoryInfo: category.name,
                }}
              >
                <Icons className="iconsImage" />
                <h3>{category.name}</h3>
              </Link>
            );
          })}
        </section>

        <footer className="footer"></footer>
      </MainContainer>
    </>
  );
};

export default Home;

const MainContainer = styled.main`
  padding: 20px 10px 0;
  border-top: 1px solid blue;
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

  .footer {
    border-top: 1px solid white;
    /* text-align: center; */
    margin: 20px 0;
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
