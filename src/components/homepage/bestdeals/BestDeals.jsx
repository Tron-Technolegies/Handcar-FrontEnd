import React from "react";
import "../bestdeals/BestDeals.css";
import DealCard from "./DealCard";
import usePromotedProducts from "../../../hooks/promotions/usePromotedProducts";
import Loading from "../../Loading";

const BestDeals = () => {
  const { loading, products, maxDiscount } = usePromotedProducts();

  if (loading) return <Loading />;

  if (!products || products.length === 0) return null;

  return (
    <div className="best_deals lg:px-[120px] px-10">
      <div className="best_deal_heading">
        <h1 className="md:text-3xl text-xl font-semibold">
          Today's Deals <span>Upto {maxDiscount}% OFF</span>
        </h1>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((item) => (
          <DealCard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.discounted_price}
            original_price={item.original_price}
            discount_percentage={item.discount_percentage}
            max_discount={maxDiscount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
