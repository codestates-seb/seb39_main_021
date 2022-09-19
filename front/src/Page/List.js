import { Link } from "react-router-dom";

const List = () => {
  const restaurantList = [
    {
      id: "",
      imageUrl: "",
      title: "댄스연습실",
      address: "서울시 송파구",
      rating: "4.9점",
    },
    {
      id: "",
      imageUrl: "",
      title: "댄스연습실",
      address: "서울시 송파구",
      rating: "4.9점",
    },
    {
      id: "",
      imageUrl: "",
      title: "댄스연습실",
      address: "서울시 송파구",
      rating: "4.9점",
    },
  ];

  return (
    <div>
      <h2> 식당 </h2>
      <button>
        {" "}
        <Link to="/LocalFilter"> 전국 </Link>{" "}
      </button>
      <button>
        {" "}
        <Link to="/MapList"> 지도 </Link>{" "}
      </button>

      {restaurantList.map((restaurant) => (
        <div key={restaurant}>
          <image src={restaurant.imageUrl} />
          <div>{restaurant.title}</div>
          <div>{restaurant.address}</div>
          <div>{restaurant.rating}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
