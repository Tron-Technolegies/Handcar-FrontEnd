export default function OrderDetails({ order }) {
  const details = order?.order_details;
  const hasCoupon = details?.coupon;
  const discount = hasCoupon
    ? details.total_price * (parseInt(details.coupon?.discount_percentage) / 100)
    : 0;

  const grandTotal = parseInt(details?.total_price) + 20 - discount;

  return (
    <div className="md:w-2/5 w-full p-5 border border-[#D0D5DD] rounded-lg flex flex-col gap-5">
      <div>
        <p className="font-medium">Order ID</p>
        <p className="text-lg font-semibold">#{order?.order_id}</p>
      </div>

      {/* Address Section */}
      <div className="flex flex-col gap-3 pb-2 border-b">
        <p className="text-[#979797]">Delivery Address </p>
        <div className="font-medium">
          <p>{details?.name}</p>
          <p className="max-w-[300px]">{details?.address}</p>
          <p>Mobile: {details?.contact}</p>
        </div>
      </div>

      {/* Items Section */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Purchased Items</h4>
        <div className="flex flex-col gap-3">
          {details?.items?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm text-gray-700"
            >
              <p className="w-1/2">{item.name}</p>
              <p className="w-1/4 text-center">x {item.quantity}</p>
              <p className="w-1/4 text-right">
                AED {parseInt(item.price) * parseInt(item.quantity)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-3">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <p className="text-[#979797]">Total</p>
            <p>AED {parseInt(details?.total_price)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#979797]">Delivery</p>
            <p>AED 20.00</p>
          </div>
          {hasCoupon && (
            <div className="flex justify-between">
              <p className="text-[#979797]">Discount</p>
              <p>- AED {discount}</p>
            </div>
          )}
          <div className="flex justify-between font-semibold text-[#17A600] border-t pt-2">
            <p>Grand Total</p>
            <p>AED {grandTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Payment Note */}
      <div className="mt-5 p-3 bg-yellow-100 text-yellow-800 text-sm rounded-lg border border-yellow-300">
        <p>
          <strong>Note:</strong> Please complete your payment. You will receive
          a detailed invoice via email once payment is confirmed.
        </p>
      </div>
    </div>
  );
}
