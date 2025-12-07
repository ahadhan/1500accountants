import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, date, time, message } = formData;

    const whatsappNumber = "447403055269"; // e.g. 923001234567 (no + symbol)

    const text =
`📅 *New Appointment Request*%0A%0A` +
`👤 *Name:* ${name}%0A` +
`📧 *Email:* ${email}%0A` +
`🗓 *Date:* ${date}%0A` +
`⏰ *Time:* ${time}%0A%0A` +
`💬 *Message:* ${message}`;


    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="scheduleForm" className="w-full py-16 bg-bg text-text flex justify-center">
      <div className="w-full max-w-2xl bg-bg-alt p-8 rounded-xl shadow-lg border border-blue-500">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Book an Appointment
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-blue-500 outline-none"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-border bg-bg focus:ring-2 focus:ring-blue-500 outline-none"
            required
            onChange={handleChange}
          /> 

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              className="p-3 rounded-lg border border-border bg-bg w-1/2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              className="p-3 rounded-lg border border-border bg-bg w-1/2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message (optional)"
            className="p-3 rounded-lg border border-border bg-bg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Send Appointment Request 
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
