import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAddItemtoCart from "../../../hooks/cart/useAddItemtoCart";
import Loading from "../../Loading";
import useAddItemtoWishList from "../../../hooks/wishlist/useAddItemtoWishList";

export default function ProductCard({
  name,
  brand,
  original_price,
  discounted_price,
  discount_percentage,
  id,
  image,
  rating,
}) {
  const { loading, addItemToCart } = useAddItemtoCart();
  const { loading: wishLoading, addItemtoWishList } = useAddItemtoWishList();

  return (
    <div className="bg-white p-5 flex flex-col gap-3 rounded-lg items-center border shadow-lg w-[330px]">
      <button
        onClick={() => addItemtoWishList({ id: parseInt(id) })}
        className="p-2 rounded-full bg-[#F2F2F2] w-fit ms-auto cursor-pointer"
      >
        <CiHeart />
      </button>

      <Link to={`/accessories/${id}`}>
        <img
          src={image ? image : "/accessories/product.png"}
          className="w-[212px] h-[141px]"
        />
      </Link>

      <div className="flex justify-between w-full items-center">
        {rating > 0 && (
          <div className="flex gap-2 items-center p-1 rounded-md bg-[#F2F2F2]">
            <p className="text-[#FFB800]">
              <FaStar />
            </p>
            <p>{rating}</p>
          </div>
        )}
      </div>

      <Link to={`/accessories/${id}`} className="font-medium text-start me-auto">
        {name}
      </Link>
      <p className="font-medium me-auto">{brand}</p>
      <div className="flex gap-3 me-auto items-center">
        {discount_percentage > 0 ? (
          <>
            <p className="font-semibold text-black">AED {discounted_price}</p>
            <p className="font-medium text-[#959595] line-through">
              AED {original_price}
            </p>
            <p className="text-[#17A600] font-bold text-xs">
              {discount_percentage}% OFF
            </p>
          </>
        ) : (
          <p className="font-semibold text-black">AED {original_price}</p>
        )}
      </div>

      <button
        onClick={() => addItemToCart({ id })}
        className="flex items-center gap-3 border rounded-lg hover:bg-black hover:text-white border-[#BBBBBB] p-2 w-full justify-center"
      >
        <span>Add to cart</span>
        <span>
          <BsCartPlus />
        </span>
      </button>

      {loading && <Loading />}
    </div>
  );
}
