import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

export const WhatsappFloating = () => (
  <a
    href="https://wa.me/919035254332"
    target="Whatsapp"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200"
    aria-label="Chat on WhatsApp"
    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
  >
    <FaWhatsapp size={32} />
  </a>
);

const ScheduleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    investmentGoal: "",
    invest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    investmentGoal: "",
    invest: "",
  });

  const TELECRM_AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  const TELECRM_ENTERPRISE_ID = import.meta.env.VITE_ENTERPRISE_ID;
  const TELECRM_API_URL = `https://api.telecrm.in/enterprise/${TELECRM_ENTERPRISE_ID}/autoupdatelead`;

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", phone: "", investmentGoal: "", invest: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
      valid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
      valid = false;
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
      valid = false;
    }
    if (!formData.investmentGoal) {
      newErrors.investmentGoal = "Please select your investment goal.";
      valid = false;
    }
    if (!formData.invest.trim()) {
      newErrors.invest = "Investment amount is required.";
      valid = false;
    } else if (
      isNaN(Number(formData.invest)) ||
      Number(formData.invest) < 1000
    ) {
      newErrors.invest = "Enter an investment amount of at least 1000 INR.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // Prepare data for TeleCRM API
    const payload = {
      fields: {
        name: formData.name,
        phone: "91" + formData.phone,
        investment_goal: formData.investmentGoal,
        amount: formData.invest,
        source: formData.investmentGoal,
      },
      actions: [
        {
          type: "SYSTEM_NOTE",
          text: `Lead Source: ${window.location.href}`,
        },
        {
          type: "SYSTEM_NOTE",
          text: `Goal: ${formData.investmentGoal}, Amount: ₹${formData.invest}`,
        },
      ],
    };

      try {
        await axios.post(TELECRM_API_URL, payload, {
          headers: {
            Authorization: `Bearer ${TELECRM_AUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", investmentGoal: "", invest: "" });
        setErrors({ name: "", phone: "", investmentGoal: "", invest: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("TeleCRM Submission Error:", error.response?.data || error);
        } else {
          console.error("TeleCRM Submission Error:", error);
        }
        alert("There was a problem submitting your details. Please try again later.");
      }
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <section className="py-20 bg-black font-poppins min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-gray-900 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Info Text */}
        <div className="flex flex-col justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your ₹1 Crore Journey Starts With This <br /> One Step
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get expert, personalized investment guidance — not just product
            sales. Let us help you build long-term wealth.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 text-base">
            <li>Trusted by 10,000+ investors</li>
            <li>Managing ₹300+ Crore in Assets</li>
            <li>SEBI Registered Distributors</li>
            <li>YouTube Verified: 5 Lakh Subscribers</li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Schedule Your Free Consultation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Phone Number *
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]*"
                inputMode="numeric"
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none"
                placeholder="9876543210"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Investment Goal */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Investment Goal *
              </label>
              <select
                name="investmentGoal"
                value={formData.investmentGoal}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none"
              >
                <option value="">Select your goal</option>
                <option value="wealth-creation">Grow my Money</option>
                <option value="financial-freedom">SIP</option>
                <option value="retirement">Retirement Planning</option>
                <option value="child-education">Child's Education</option>
                <option value="home-purchase">Home Purchase</option>
                <option value="tax-saving">Tax Saving</option>
                <option value="other">Other</option>
              </select>
              {errors.investmentGoal && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.investmentGoal}
                </p>
              )}
            </div>

            {/* Investment Amount */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Investment Amount (₹) *
              </label>
              <input
                name="invest"
                value={formData.invest}
                onChange={handleChange}
                type="number"
                min="1000"
                className="w-full px-4 py-3 border-2 border-gray-600 bg-black text-white focus:border-white focus:outline-none"
                placeholder="Enter amount in INR"
              />
              {errors.invest && (
                <p className="text-red-500 text-sm mt-1">{errors.invest}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black py-4 px-6 font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
            >
              <Send size={20} />
              <span>Schedule Free Consultation</span>
            </motion.button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 p-4 bg-white text-black text-center rounded"
              >
                Thank you! We'll contact you within 24 hours.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScheduleForm;
