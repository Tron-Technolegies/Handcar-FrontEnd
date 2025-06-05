import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import useSetDefaultAddress from "../../hooks/cart/useSetDefaultAddress";
import { MdDelete } from "react-icons/md";
import Loading from "../Loading";
import useDeleteAddress from "../../hooks/cart/useDeleteAddress";

export default function AddressCard({
  active,
  name,
  ad1,
  ad2,
  state,
  zip,
  country,
  id,
  refetch,
}) {
  const { loading, setDefault } = useSetDefaultAddress();
  const { loading: deleteLoading, deleteAdress } = useDeleteAddress();
  return (
    <div
      className={`flex gap-3 items-start max-w-[340px] p-5 border border-black rounded-xl shadow-lg cursor-pointer ${
        !active && "bg-[#F8F8F8] border-0"
      }`}
    >
      {loading && <Loading />}
      <p
        className="text-xl"
        onClick={async () => {
          await setDefault({ id });
          refetch();
        }}
      >
        {active ? <FaRegCircleDot /> : <FaRegCircle />}
      </p>
      <div className="flex flex-col gap-1 w-full">
        <p>{name}</p>
        <p>{ad1}</p>
        <p>{ad2}</p>
        <p>{state}</p>
        <p>{country}</p>
        <p>{zip}</p>
        <p>Mobile: +971 50 123 4567</p>
        <button
          className="my-2 text-right text-red-500 self-end cursor-pointer w-fit"
          onClick={async () => {
            await deleteAdress({ id });
            refetch();
          }}
        >
          <MdDelete />
        </button>
      </div>
      {deleteLoading && <Loading />}
    </div>
  );
}
