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
      <div className="flex flex-col gap-3 pb-2 border-b">
        <p className="text-[#979797]">Billing Address</p>
        <div className="font-medium">
          <p>Ahmed Al-Farsi </p>
          <p>123 Sheikh Zayed Road,</p>
          <p>Downtown Dubai,</p>
          <p>Dubai, United Arab Emirates</p>
          <p>P.O. Box 12345,</p>
          <p>Mobile: +971 50 123 4567</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-2 border-b">
        <p className="text-[#979797]">Contact Details</p>
        <div className="font-medium">
          <p>+971 50 123 4567</p>
          <p>+971 67 848 567</p>
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
        <div className="flex justify-between">
          <p className="text-[#979797]">Grand total</p>
          <p className="text-lg text-[#17A600] font-semibold">
            AED {parseInt(order?.order_details?.total_price) + 20}
          </p>
        </div>
      </div>
    </div>
  );
}
