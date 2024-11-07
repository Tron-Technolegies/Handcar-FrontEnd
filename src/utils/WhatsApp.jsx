import React from "react";

const WhatsApp = () => {
  const phoneNumber = "+919539711107";

  const handleChatClick = () => {
    const message = "Hi, I would like to chat with you";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button onClick={handleChatClick}>contact us</button>
    </div>
  );
};

export default WhatsApp;
