export const handleEnquiry = ({ name }) => {
  const phoneNumber = "+971503507618";
  const messageContent = `${name}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handleEnquiryFormClick = ({ name, email, phone, message }) => {
  const phoneNumber = "+971544463803";
  const messageContent = `NAME : ${name}\n EMAIL : ${email}\n PHONE : ${phone}\n MESSAGE : ${message}`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

export const handlePlaceOrder = ({ data }) => {
  const phoneNumber = "+971544463803";
  const messageContent = `I have placed an Order with orderId: ${
    data.order_id
  }.\n  ${data.cartItems.map(
    (item) =>
      `${item.name}-${item.quantity}nos X AED${item.price} = ${
        parseInt(item.price) * item.quantity
      } \n`
  )} \n Total Price (including Delivery): ${
    data.totalPrice + 20
  }. \n  I would like to proceed with the order.`;
  const encodedMessage = encodeURIComponent(messageContent);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
