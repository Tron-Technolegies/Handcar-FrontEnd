import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CouponItem from "./CouponItem";
import useGetAllCoupons from "../../hooks/cart/useGetAllCoupons";
import Loading from "../Loading";

export default function CouponsSection() {
  const { loading, coupons } = useGetAllCoupons();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)
    responsive: [
      {
        breakpoint: 1266,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return loading ? (
    <Loading />
  ) : (
    <div>
      <h4 className="text-[#7D7D7D] text-sm">Available Coupons</h4>
      <Slider {...settings} className="my-10">
        {coupons.map((x) => (
          <CouponItem
            key={x.id}
            code={x.coupon_code}
            percent={x.discount_percentage}
            name={x.name}
          />
        ))}
      </Slider>
    </div>
  );
}
