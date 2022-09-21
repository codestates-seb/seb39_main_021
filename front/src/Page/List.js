import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = () => {
  const [storeList, setStoreList] = useState(null);
  const storeLists = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:4000/items")
      .then(() => setStoreList(storeLists.state.info));
  }, []);
  return (
    <StoreList>
      {storeList === null ? null : <h2> {storeList.title} </h2>}
      <section className="buttonContainer">
        <button>
          <Link to="/LocalFilter"> 전국 </Link>
        </button>
        <button>
          <Link to="/MapList"> 지도 </Link>
        </button>
      </section>
      {storeList !== null
        ? storeList.stores.map((itmes) => (
            <Link
              key={itmes.id}
              to={"/storeDetailPage"}
              state={{
                storeData: storeList,
              }}
            >
              <StoreContainer key={itmes.id}>
                <div className="imgContainer">
                  <img src={itmes.image} alt="더미데이터" />
                </div>
                <div className="informationContainer">
                  <h3 className="title">{itmes.name}</h3>
                  <div className="address">{itmes.address}</div>
                  <div className="rating">{itmes.rating}</div>
                </div>
              </StoreContainer>
            </Link>
          ))
        : null}
    </StoreList>
  );
};
const StoreList = styled.section`
  color: white;
  padding-top: 24px;

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0px;
  }
`;

const StoreContainer = styled.div`
  border-radius: 3px;
  display: flex;
  margin-bottom: 24px;
  padding: 12px;
  background-color: #504e4a;

  .imgContainer {
    width: 96px;
    height: 96px;
    margin-right: 12px;

    img {
      border-radius: 3px;
      height: 100%;
    }
  }

  .informationContainer {
    color: white;
    padding: 10px 0px;

    .title {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .address {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .rating {
      font-size: 1.2rem;
    }
  }
`;

export default List;

// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const List = () => {
//   const [storeList, setStoreList] = useState();
//   const restaurantList = storeList[1].stores;
//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/items")
//       .then((items) => setStoreList(items.data));
//   }, []);

//   console.log(storeList[0].stores);
//   return (
//     <div>
//       <h2> 식당 </h2>
//       <button>
//         {" "}
//         <Link to="/LocalFilter"> 전국 </Link>{" "}
//       </button>
//       <button>
//         {" "}
//         <Link to="/MapList"> 지도 </Link>{" "}
//       </button>

//       {restaurantList.map((store) => (
//         <div key={store}>
//           <image src={store.image} alt="식당 사진" />
//           <div>{store.name}</div>
//           <div>{store.address}</div>
//           <div>{store.rating}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;
