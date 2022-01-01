import React, { useEffect } from "react";
import SectionHomeHeader from "./Home/SectionHomeHeader";
import SectionHomeBenefits from "./Home/SectionHomeBenefits";
import SectionHomeServices from "./Home/SectionHomeServices";
import Map from "../Map/Map";

const Home = () => {
  //НЕ РАБОТАЕТ

  // const script = <script src="../../api/mapApi.js"></script>;
  // const script = document.createElement("script");
  // script.setAttribute("src", "../../api/mapApi.js");
  //
  // useEffect(() => {
  //   console.log(script);
  //   document.body.append(script);
  //
  //   return () => {
  //     script.remove();
  //   };
  // }, []);

  return (
    <main className="home">
      <SectionHomeHeader />
      <SectionHomeBenefits />
      <SectionHomeServices />
      <Map />
      {/*{script}*/}
    </main>
  );
};

export default Home;
