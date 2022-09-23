import Header from "../mainPage/header";
import { useLocation } from "react-router-dom";

const MoreReview = () => {
  const {
    state: { storeData },
  } = useLocation();
  console.log(storeData);
  const reviewInfo = storeData.reviews;
  return (
    <section>
      <Header />
      <div></div>
    </section>
  );
};

export default MoreReview;
