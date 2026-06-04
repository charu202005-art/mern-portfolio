import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

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
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[radial-gradient(ellipse_at_bottom,_rgba(189,0,255,0.03),_transparent_50%)] text-white px-6 md:px-12 py-24 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Decorative side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-16"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-cyan">
          Inquiries
        </span>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent mt-2 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Have an exciting project, role, or collaboration suggestion? Send me a message, and I'll get back to you shortly.
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-xl z-10"
      >
        <form
          onSubmit={handleSubmit}
          className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300"
        >
          {/* Subtle line glow decoration */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

          {/* Name input */}
          <div className="mb-6">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Charmathy M"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSending}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/[0.08] focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/40 outline-none transition-all duration-300"
            />
          </div>

          {/* Email input */}
          <div className="mb-6">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="charmathy@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSending}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/[0.08] focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/40 outline-none transition-all duration-300"
            />
          </div>

          {/* Message input */}
          <div className="mb-8">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Let's build something future-proof..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSending}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:bg-white/[0.08] focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/40 outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              isSending
                ? "bg-white/10 text-gray-500 border border-white/5 cursor-not-allowed"
                : "bg-brand-cyan text-black hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.35)]"
            }`}
          >
            {isSending ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;