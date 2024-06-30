import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/social.png";
import ImageThree from "../../images/Supply-Chain-Optimization-1-scaled.png";
import ImageFour from "../../images/cds.png";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Real Estate: Price Predictor",
    image: ImageOne,
    link: "https://github.com/Vanshika1217/Real-Estate-Price-Predictor",
  },
  {
    id: 2,
    name: "Social Networking Analysis",
    link: "https://github.com/Vanshika1217/SOCIALNETWORK",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Supply Chain Optimization",
    image: ImageThree,
    link: "https://github.com/Vanshika1217/Supply-Chain-Optimization",
  },
  {
    id: 4,
    name: "Web Portal For Consumable Products",
    image: ImageFour,
    link: "https://github.com/Vanshika1217/Consumables-Portal",
  }
  
 
];



const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);


  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
         
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
