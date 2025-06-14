import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import useAddItemtoCart from "../../../hooks/cart/useAddItemtoCart";
import { useParams } from "react-router-dom";
import useAddItemtoWishList from "../../../hooks/wishlist/useAddItemtoWishList";

const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function SinglePageHeader({ product }) {
  const { id } = useParams();
  const { loading, addItemToCart } = useAddItemtoCart();
  const { loading: wishlistLoading, addItemtoWishList } =
    useAddItemtoWishList();
  const [current, setCurrent] = useState(product.image);
  return (
    <div className="lg:px-[120px] py-10 px-5 flex md:flex-row flex-col md:items-start items-center gap-5 justify-between">
      <div className="flex 2xl:flex-row flex-col-reverse gap-5 w-full">
        {/* <div className="flex 2xl:flex-col flex-row gap-1">
          <img
            className={`w-[82px] h-[82px] rounded-lg ${
              current === "/accessorySingle/p-1.jpg" &&
              "border-4 border-blue-600"
            }`}
            src="/accessorySingle/p-1.jpg"
            onClick={() => setCurrent("/accessorySingle/p-1.jpg")}
          ></img>
          <img
            className={`w-[82px] h-[82px] rounded-lg ${
              current === "/accessorySingle/p-2.jpg" &&
              "border-4 border-blue-600"
            }`}
            src="/accessorySingle/p-2.jpg"
            onClick={() => setCurrent("/accessorySingle/p-2.jpg")}
          ></img>
          <img
            className={`w-[82px] h-[82px] rounded-lg ${
              current === "/accessorySingle/p-3.jpg" &&
              "border-4 border-blue-600"
            }`}
            src="/accessorySingle/p-3.jpg"
            onClick={() => setCurrent("/accessorySingle/p-3.jpg")}
          ></img>
        </div> */}
        <img
          src={current}
          className="max-w-[400px] object-cover rounded-lg"
        ></img>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <h4 className="font-semibold text-lg">{product.name}</h4>
          <p className="text-[#8F8F8F]">{product.category_name}</p>
        </div>
        <div className="font-semibold">
          {product?.discount_percentage && (
            <h5 className="line-through">
              AED 
              {(
                parseInt(product.price) /
                ((100 - parseInt(product.discount_percentage)) / 100)
              ).toFixed(2)}
            </h5>
          )}

          <p>AED {product.price}</p>
        </div>
        {product.discount_percentage && (
          <>
            {" "}
            <p className="text-[#17A600]">
              Saving: AED{" "}
              {(
                parseInt(product.price) /
                  ((100 - parseInt(product.discount_percentage)) / 100) -
                parseInt(product.price)
              ).toFixed(2)}
            </p>
            <p className="bg-[#FFE500] text-sm p-2 rounded-md text-black w-fit font-medium">
              Lowest price in 7 days
            </p>
          </>
        )}

        {/* <div className="font-bold">
          <p>Free Delivery by Sun, 17 March</p>
          <p className="text-[#17A600]">Order in 12 h 53 m</p>
        </div> */}
        <div className="flex flex-col gap-2">
          {/* <p className="text-[#8F8F8F] text-sm">Quantity</p> */}
          <div className="flex gap-3">
            {/* <select
              className={`py-1 px-2 rounded-lg bg-white border border-gray-300 text-gray-900 `}
            >
              {list?.map((item) => (
                <option
                  className="border-b py-1 border-gray-300"
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select> */}
            <button
              onClick={() => addItemToCart({ id: product.id || id })}
              className="px-5 py-2 bg-black text-white hover:bg-white hover:text-black hover:border-2 rounded-lg grow"
            >
              Add to cart
            </button>
            <p
              onClick={() => addItemtoWishList({ id: product.id || id })}
              className="border-2 p-3 rounded-lg"
            >
              <IoIosHeartEmpty />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
