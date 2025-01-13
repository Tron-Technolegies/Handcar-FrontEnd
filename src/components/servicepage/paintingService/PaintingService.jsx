import React from "react";
import PaintingCard from "./PaintingCard";
import useGetAllServices from "../../../hooks/vendorservices/useGetAllServices";
import Loading from "../../Loading";

export default function PaintingService() {
  const { loading, services } = useGetAllServices();
  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-[120px] py-10 px-10">
      <h4 className="text-xl font-semibold text-center">
        213 painting services around you
      </h4>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-10">
        {services?.length > 0 &&
          services.map((x) => <PaintingCard key={x.id} data={x} />)}
      </div>
    </div>
  );
}
