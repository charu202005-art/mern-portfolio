import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_12345",
        "template_12345",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "SjDzrlDCKuUnTfVSR"
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="bg-black text-white px-10 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center text-cyan-400"
      >
        Contact Me
      </motion.h2>

      <div className="flex justify-center mt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl w-full max-w-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-lg bg-black border border-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-lg bg-black border border-cyan-400 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 rounded-lg bg-black border border-cyan-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-3 rounded-lg font-bold hover:bg-cyan-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;