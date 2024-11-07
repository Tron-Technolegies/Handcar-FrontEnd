import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryIconElt from "./CategoryIconElt";

export default function ProductPageHeader() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="">
        <CategoryIconElt
          img={"/accessories/category-3.png"}
          name={"Maintainance & care"}
        />
        <CategoryIconElt
          img={"/accessories/category-2.png"}
          name={"Interior Accessories"}
        />
        <CategoryIconElt
          img={"/accessories/category-1.png"}
          name={"Automotive Electronics"}
        />
        <CategoryIconElt
          img={"/accessories/category-3.png"}
          name={"Maintainance & care"}
        />
        <CategoryIconElt
          img={"/accessories/category-2.png"}
          name={"Interior Accessories"}
        />
        <CategoryIconElt
          img={"/accessories/category-1.png"}
          name={"Automotive Electronics"}
        />
        <CategoryIconElt
          img={"/accessories/category-3.png"}
          name={"Maintainance & care"}
        />
        <CategoryIconElt
          img={"/accessories/category-2.png"}
          name={"Interior Accessories"}
        />
        <CategoryIconElt
          img={"/accessories/category-1.png"}
          name={"Automotive Electronics"}
        />
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
