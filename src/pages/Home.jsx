import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img
        src="https://tichung.com/blog/2021/20200323_flask/feature.png"
        alt=""
      />
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Home;
