import axios from "axios";
import { useEffect, useState } from "react";

const Test = () => {
  const [list, setList] = useState([]);
  const handleCheck = () => {
    setList((el) => [...el, "world"]);
    console.log(list);
  };

  return (
    <>
      <div>
        <button onClick={handleCheck}>클릭!</button>
        hello world <span>{list}</span>
      </div>
    </>
  );
};

export default Test;
