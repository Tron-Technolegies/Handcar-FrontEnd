import React from "react";
import VendorServiceCard from "./VendorServiceCard";

export default function VendorService({ services }) {
  return (
    <div className="lg:px-[120px] py-10 px-10">
      <h4 className="text-xl font-semibold text-center">
        {services.length} services
      </h4>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-10">
        {services?.length > 0 &&
          services.map((x) => <VendorServiceCard key={x.id} data={x} />)}
      </div>
    </div>
  );
}
