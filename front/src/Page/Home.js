import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import categoryList from "../DummyData/categoryList";
import Footer from "../component/Footer";

const Home = ({ selectData, setSelectData }) => {
  const [openMenu, setOpenMenu] = useState(true);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} openMenu={openMenu} />
      <MainContainer>
        <h1>카테고리</h1>
        <a
          href="https://github.com/codestates-seb/seb39_main_021"
          className="mainBanner"
          target="_blank"
        >
          <img src="https://user-images.githubusercontent.com/103917785/194164782-ed2474d5-3f09-4720-8a96-0720f4b0bd18.png" />
        </a>
        <section className="categoryContainer">
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
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;

const MainContainer = styled.main`
  padding: 36px 24px;

  h1 {
    display: none;
  }

  .mainBanner {
    width: 100%;
    margin-top: 10px;

    img {
      width: 100%;
    }
  }

  .categoryContainer {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-items: center;

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
`;
