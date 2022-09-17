import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: "1",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "식당",
      path: "/food",
    },
    {
      id: "2",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "카페",
      path: "/cafe",
    },
    {
      id: "3",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "동물병원",
      path: "/animal",
    },
    {
      id: "4",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "약국",
      path: "/pharmacy",
    },
    {
      id: "5",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "병원",
      path: "/hospital",
    },
    {
      id: "6",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "노래방",
      path: "/sing",
    },
    {
      id: "7",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "세탁방",
      path: "/laundry",
    },
    {
      id: "8",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "편의점",
      path: "/convenience",
    },
    {
      id: "9",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "pc방",
      path: "/pc",
    },
    {
      id: "10",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "주요소",
      path: "/gas",
    },
    {
      id: "11",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "무인판매점",
      path: "/unmanned",
    },
    {
      id: "12",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg",
      title: "기타등등",
      path: "/etc",
    },
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

  return (
    <section>
      <h1>카테고리</h1>
      {categories.map((category) => (
        <Link key={category.id}>
          <img src={category.imageUrl} alt="무언가" />
        </Link>
      ))}
      <h2>인기게시물</h2>
      {popularPosts.map((post) => (
        <div key={post.id}>
          <img src={post.image} alt={post.imageDescription} />
          <h1>{post.title}</h1>
          <span>{post.rating}</span>
        </div>
      ))}
    </section>
  );
};

export default Home;
