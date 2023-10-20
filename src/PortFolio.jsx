import React from "react";
import portfolio1 from "./Letme-Images/portfolio-1.jpg";
import portfolio2 from "./Letme-Images/portfolio-2.jpg";
import portfolio3 from "./Letme-Images/portfolio-3.jpg";
import portfolio4 from "./Letme-Images/portfolio-4.jpg";
import portfolio5 from "./Letme-Images/portfolio-5.jpg";
import portfolio6 from "./Letme-Images/portfolio-6.jpg";

const PortFolio = () => {
  return (
    <div className="portfolio">
      <h3>MY PORTFOLIO</h3>
      <div className="all-design">
        <button id="all">All</button>
        <button>Design</button>
        <button>Development</button>
        <button>Marketing</button>
      </div>
      <div className="images">
        <img src={portfolio1} alt="portfolio1" />
        <img src={portfolio2} alt="portfolio2" />
        <img src={portfolio3} alt="portfolio3" />
        <img src={portfolio4} alt="portfolio4" />
        <img src={portfolio5} alt="portfolio5" />
        <img src={portfolio6} alt="portfolio6" />
      </div>
    </div>
  );
};

export default PortFolio;
