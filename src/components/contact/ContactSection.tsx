"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "michaelalula05@gmail.com",
    link: "mailto:michaelalula05@gmail.com",
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "+251 909250859",
    link: "tel:+251909250859",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Addis Ababa · Ethiopia",
    link: "#",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const InputStyles =
    "w-full px-4 py-3.5 mb-4 bg-slate-800 outline-none rounded-md text-gray-200 placeholder-gray-400 border border-slate-700 focus:border-indigo-500 transition-colors";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-16">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
            Ready to Collaborate
          </h2>

          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            I'm currently available for freelance work and full-time
            opportunities. Whether you have a project in mind or just want to
            connect, feel free to reach out.
          </p>

          <div className="space-y-5 mb-12">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.link}
                  key={item.title}
                  className="group flex items-center gap-4 px-4 py-3 transition-all hover:bg-white/5 rounded-lg"
                >
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white/5 text-indigo-400 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-slate-900 p-8 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={InputStyles}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={InputStyles}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={InputStyles}
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`${InputStyles} resize-none`}
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 rounded-md bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm mt-4">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
