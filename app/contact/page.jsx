"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../ThemeContext";
export default function Contact() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = "service_g85h72t";
    const templateId = "template_m7zyp4z";
    const userId = "750VwY2asRkZYGSCp";
    emailjs.send(serviceId, templateId, formData, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus(
          "Message sent successfully! I will get back to you soon. Thank you for Reaching out me  "
        );
        setFormData({ from_name: "", from_email: "", message: "" }); // Clear the form
        setLoading(false);
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("Failed to send the message. Please try again it.");
        setLoading(false);
      }
    );
  };
  setTimeout(() => {
    setStatus("");
  }, 8000);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center max-w-96">
        {/* <h2 className="text-2xl font-semibold">Get In Touch</h2> */}
        <p className="text-lg mb-8 mt-4">
          Have any questions, collaboration opportunities, or just want to say
          hi? Feel free to reach out Me!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Enter your name here"
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "bg-white text-black border-gray-300 focus:ring-blue-500"
                  : "bg-gray-800 text-white border-gray-600 focus:ring-amber-500"
              }`}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="from_email" className="block text-sm font-medium">
              Your Email
            </label>

            <input
              type="email"
              id="from_email"
              name="from_email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "bg-white text-black border-gray-300 focus:ring-blue-500"
                  : "bg-gray-800 text-white border-gray-600 focus:ring-amber-500"
              }`}
              required
            />

            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500 mt-3" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                theme === "light"
                  ? "bg-white text-black border-gray-300 focus:ring-blue-500"
                  : "bg-gray-800 text-white border-gray-600 focus:ring-amber-500"
              }`}
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            {loading ? "please wait..." : "Send Message"}
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">
            {status}
          </p>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-4xl  rounded-lg p-2 shadow-lg">
          <p className=" text-base flex items-center md:text-2xl mb-4">
            {" "}
            Want to contact me directly ? Here I am ready to contact you ASAP
          </p>
          <ul className="flex flex-wrap justify-between text-base space-y-4 md:space-y-0 md:space-x-8">
            <li className="flex items-center space-x-2 mt-4 md:mt-0">
              <EnvelopeIcon className="w-6 h-6 text-blue-500" />
              <a
                href="mailto:berahaan@example.com"
                className="text-blue-500 hover:text-blue-700"
              >
                Email
              </a>
            </li>
            <li className="flex items-center space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="md:size-6 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="text-base md:text-lg">+251947363764</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22.5 6.5c-1 2.3-5 7-7 9s-6 4-7 4-4-2-4-2 0 4 2 5 5-1 7-2c3 2 6 2 7 1 1-.7 1-1 0-1s-3-2-5-3 0-6 0-7 2-2 2-2 0-1-1-1-5 1-6 2-1 4-1 5c0 1 4 3 6 3s5 0 5-1c1 0 1-1 1-1 0-1 0-2-1-2s-3 1-4 2z"
                />
              </svg>
              <a
                href="https://t.me/bekind2yourself"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Telegram
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v12.6a4.2 4.2 0 01-1 1.4l-3.4 2.8a3.1 3.1 0 01-4.6-3.2l3.7-11a2.3 2.3 0 011.9-1.7h7.6a2.3 2.3 0 011.9 1.7l3.7 11a3.1 3.1 0 01-4.6 3.2l-3.4-2.8a4.2 4.2 0 01-1-1.4V3h-4z"
                />
              </svg>
              <a
                href="https://www.linkedin.com/in/birhan-kabtamu-b05b78269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPinIcon className="h-6 w-6 text-gray-500" />
              <span>Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
