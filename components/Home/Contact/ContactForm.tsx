"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messages, setMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const { msg, success } = await res.json();

    setMessages(msg);
    setIsSuccess(success);

    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <form
      data-aos="zoom-in"
      data-aos-anchor-placement="top-center"
      data-aos-delay="0"
      onSubmit={handleSubmit}
      className="md:p-10 p-5 bg-[#131332] rounded-lg"
    >
      <input
        onChange={handleChange}
        value={formData.name}
        name="name"
        type="text"
        placeholder="Name"
        className="w-full px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70"
      />
      <input
        onChange={handleChange}
        value={formData.email}
        name="email"
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70"
      />
      <input
        onChange={handleChange}
        value={formData.phone}
        name="phone"
        type="tel"
        placeholder="Phone Number"
        className="w-full px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70"
      />
      <textarea
        onChange={handleChange}
        value={formData.message}
        name="message"
        placeholder="Message"
        className="w-full h-40 px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md placeholder:text-white/70"
      />
      <div className="mt-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${isSuccess ? "text-green-500" : "text-red-600"} text-sm`}
          >
            {msg}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full px-4 py-3.5 mt-6 font-semibold text-white bg-blue-700 rounded-md hover:bg-blue-900 cursor-pointer transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
