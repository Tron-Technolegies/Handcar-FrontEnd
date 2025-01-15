import React from "react";
import "../variousHandcarServices/VariousHandcarServices.css";
import ServiceElt from "./ServiceElt";
import useGetAllServiceCategories from "../../../hooks/vendorservices/useGetAllServiceCategories";
import Loading from "../../Loading";
const VariousHandcarServices = () => {
  const { loading, categories } = useGetAllServiceCategories();
  return loading ? (
    <Loading />
  ) : (
    <div className="mt-0">
      <div className="red-gradient lg:px-[120px] px-10 py-10 text-center">
        <h1 className="md:text-4xl text-2xl text-white font-semibold">
          Our Services
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-10 lg:px-[120px] px-10 py-10 justify-items-center place-content-center">
        {categories.map((x) => (
          <ServiceElt
            key={x.id}
            icon={"/services/service-1.png"}
            content={x.name}
          />
        ))}
      </div>
    </div>
  );
};

export default VariousHandcarServices;
