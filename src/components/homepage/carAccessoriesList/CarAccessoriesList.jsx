import React from "react";
import "../carAccessoriesList/CarAccessoriesList.css";
import AccessoriesElt from "./AccessoriesElt";
import { Link } from "react-router-dom";
import useGetPromotedBrandProducts from "../../../hooks/promotions/useGetPromotedBrandProducts";
import Loading from "../../Loading";

const CarAccessoriesList = () => {
  const { loading, products } = useGetPromotedBrandProducts();
  return (
    <div className="lg:px-[120px] py-10 px-10">
      <div className="flex lg:flex-row flex-col justify-between gap-3 lg:items-center my-5">
        <h1 className="md:text-3xl text-xl font-semibold">
          Discover Car Accessories From Top Brands
        </h1>
        <Link
          to={"/accessories"}
          className="px-4 py-2 rounded-lg bg-[#DB1215] text-white w-fit"
        >
          View all Products
        </Link>
      </div>
      <div className="listof_top_deal_products">
        {loading ? (
          <Loading />
        ) : (
          products.map((item) => (
            <AccessoriesElt
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CarAccessoriesList;
