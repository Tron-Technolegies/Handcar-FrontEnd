export default function OrderDetails({ order }) {
  return (
    <div className="md:w-2/5 w-full p-5 border border-[#D0D5DD] rounded-lg flex flex-col gap-5">
      <div>
        <p className="font-medium">Order ID</p>
        <p className="text-lg font-semibold">#{order?.order_id}</p>
      </div>
      <div className="flex flex-col gap-3 pb-2 border-b">
        <p className="text-[#979797]">Delivery Address </p>
        <div className="font-medium">
          <p>{order?.order_details?.name}</p>
          <p>{order?.order_details?.address?.street}</p>
          <p>{order?.order_details?.address?.city}</p>
          <p>{order?.order_details?.address?.state}</p>
          <p>
            {order?.order_details?.address?.zip_code}{" "}
            {order?.order_details?.address?.country}
          </p>
          <p>Mobile: {order?.order_details?.contact}</p>
        </div>
      </div>

      <h4 className="text-lg font-semibold">Order Summary</h4>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="text-[#979797]">Total</p>
          <p>AED {order?.order_details?.total_price}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#979797]">Delivery</p>
          <p>AED 20.00</p>
        </div>
        {order?.order_details?.coupon && (
          <div className="flex justify-between">
            <p className="text-[#979797]">Discount</p>
            <p>{`AED ${
              order?.order_details?.total_price *
              (parseInt(order?.order_details?.coupon?.discount_percentage) /
                100)
            }`}</p>
          </div>
        )}
        <div className="flex justify-between">
          <p className="text-[#979797]">Grand total</p>
          <p className="text-lg text-[#17A600] font-semibold">
            {order?.order_details?.coupon
              ? `AED ${
                  parseInt(order?.order_details?.total_price) +
                  20 -
                  order?.order_details?.total_price *
                    (parseInt(
                      order?.order_details?.coupon?.discount_percentage
                    ) /
                      100)
                }`
              : `AED ${parseInt(order?.order_details?.total_price) + 20}`}
          </p>
        </div>
      </div>
    </div>
  );
}
