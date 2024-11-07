import React from "react";

export default function BrandAcessoryElt() {
  return (
    <div className="bg-[#FBFBFD] p-5 shadow-md border flex flex-col gap-5 rounded-lg md:max-w-[430px] max-w-[350px]">
      <img
        src="/pioneer.png"
        alt=""
        srcset=""
        className="md:max-w-[400px] max-h-[260px] rounded-md"
      />

      <h2 className="text-xl font-bold">
        Explore Products from Pioneer <br />
        Audio
      </h2>
      <div className="bg-[#FFE500] text-sm font-semibold p-2 w-fit rounded-md">
        <p>Best Brand Selected by Customers</p>
      </div>
    </div>
  );
}
