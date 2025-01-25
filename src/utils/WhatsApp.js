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
