import React, { useEffect } from "react";
import Advantage from "./Advantage/Advantage";
import Clients from "./Clients/Clients";
import SLider from "./Slider/SLider";
import Welcome from "./Welcome/Welcome";
import WORKS from "./WORKS/WORKS";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <SLider />
      <Welcome />
      <Advantage />
      <WORKS />
      <Clients />
    </div>
  );
}

export default Home;
