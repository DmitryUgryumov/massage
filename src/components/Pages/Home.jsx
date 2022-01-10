import React, { useEffect } from "react";
import SectionHomeHeader from "./Home/SectionHomeHeader";
import SectionHomeBenefits from "./Home/SectionHomeBenefits";
import SectionHomeServices from "./Home/SectionHomeServices";
import MyMap from "../Map/MyMap";
import YMap from "../Map/YMap";

const Home = () => {
  return (
    <main className="home">
      <SectionHomeHeader />
      <SectionHomeBenefits />
      <SectionHomeServices />
      <YMap />
      {/*{script}*/}
    </main>
  );
};

export default Home;
