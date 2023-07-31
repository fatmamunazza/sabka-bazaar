import React from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SaleCarousel = () => {
  const saleData = [
    "https://sabkabazaar-shopping.netlify.app/static/images/offers/offer5.jpg",
    "https://sabkabazaar-shopping.netlify.app/static/images/offers/offer1.jpg",

    "https://sabkabazaar-shopping.netlify.app/static/images/offers/offer2.jpg",
    "https://sabkabazaar-shopping.netlify.app/static/images/offers/offer3.jpg",
    "https://sabkabazaar-shopping.netlify.app/static/images/offers/offer4.jpg",
  ];

  return (
    <Carousel
      showArrows={true}
      autoPlay
      interval="5000"
      transitionTime="1000"
      infiniteLoop
      showThumbs={false}
    >
      {saleData.map((data, index) => (
        <img
          src={data}
          alt="Image 1"
          style={{
            width: "100%",
            height: "25vh",
          }}
        />
      ))}
    </Carousel>
  );
};
export default SaleCarousel;
