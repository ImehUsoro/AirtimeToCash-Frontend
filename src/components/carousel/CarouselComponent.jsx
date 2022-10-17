import React from "react";
import Carousel from "react-elastic-carousel";
import { CarouselData } from "./CarouselData";
import { Item } from "./Item";
import './Styles.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1280, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

const CarouselComponent = () => {
  return (
    <Carousel breakPoints={breakPoints} pagination={false} className='carousel-root'>
      {CarouselData.map((item, index) => (
        <Item key={index} className="item-div">
          <h3 className="name">{item.name}</h3>
          <p>{item.comment}</p>
        </Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
