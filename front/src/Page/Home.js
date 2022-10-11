import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import categoryList from "../DummyData/categoryList";
import Footer from "../component/Footer.js";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <article>
      <Header toggleMenu={toggleMenu} openMenu={openMenu} />
      <MainContainer>
        <h1>카테고리</h1>
        <a
          href="https://github.com/codestates-seb/seb39_main_021"
          className="mainBanner"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/103917785/194164782-ed2474d5-3f09-4720-8a96-0720f4b0bd18.png"
            alt="Logo"
          />
        </a>
        <section className="categoryContainer">
          {categoryList.map((category, index) => {
            const Icons = category.icon;
            return (
              <Link
                key={index}
                className="categoryItems"
                to="/list"
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
      </MainContainer>
      <Footer />
    </article>
  );
};

export default Home;

const MainContainer = styled.main`
  padding: 36px 24px 0px 24px;

  h1 {
    display: none;
  }

  .mainBanner {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .categoryContainer {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-items: center;
    margin: 10px 0px;

    .categoryItems {
      margin: 2.4rem 0px 5rem 0px;
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  .iconsImage {
    font-size: 50px;
    height: 50px;
    color: white;
  }
`;
