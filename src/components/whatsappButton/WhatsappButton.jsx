import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsappIcon from '../../assets/images/whatsapp.png';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = "447403055269"; // Replace with your number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform transform hover:scale-110"
    >
      <img src={WhatsappIcon} alt="WhatsApp" className="w-20 h-20" />
    </a>
  );
};

export default WhatsAppFloatingButton;
