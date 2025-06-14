import React from "react";
import "../bestdeals/BestDeals.css";
import top_deal_product_img from "../../../assets/top_deal_product_img.png";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
import DealCard from "./DealCard";
import usePromotedProducts from "../../../hooks/promotions/usePromotedProducts";
import Loading from "../../Loading";
const BestDeals = () => {
  const { loading, products } = usePromotedProducts();
  return (
    <div className="best_deals lg:px-[120px] px-10">
      <div className="best_deal_heading">
        <h1 className="md:text-3xl text-xl font-semibold">
          Today's Deals <span>Upto 60% OFF</span>
        </h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {products.map((item) => (
            <DealCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestDeals;
