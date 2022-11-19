import React, { useEffect } from "react";
import Business from "./Business";

function Aboutus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Business />
    </div>
  );
}

export default Aboutus;
