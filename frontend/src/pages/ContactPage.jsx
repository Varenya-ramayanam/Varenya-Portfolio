import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbackCount, setFeedbackCount] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://portfolio-backend-kigf.onrender.com/api/feedback/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ user: "", email: "", message: "" });
        fetchFeedbackCount();
      } else {
        setResponseMessage(data.error);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setResponseMessage("Failed to submit feedback. Please try again.");
    }

    setLoading(false);
  };

  const fetchFeedbackCount = async () => {
    try {
      const response = await fetch("https://portfolio-backend-kigf.onrender.com/v1/count");
      const data = await response.json();
      if (response.ok) {
        setFeedbackCount(data.count);
      } else {
        throw new Error("Failed to fetch count");
      }
    } catch (error) {
      console.error("Error fetching feedback count:", error);
    }
  };

  useEffect(() => {
    fetchFeedbackCount();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between text-white">
      <main className="flex flex-col items-center justify-center mt-0 px-6 md:px-16">
      <div className="w-4/5 bg-gray-800 p-8 rounded-2xl shadow-2xl relative flex flex-col md:flex-row items-center gap-8">
          
          {/* Feedback Form Section */}
          <div className="w-full md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold mb-6 text-blue-300 text-center"
            >
              Leave a Feedback ! 💌
            </motion.h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-4 px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full mb-4 px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Feedback"
                className="w-full mb-4 px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 h-32"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            {responseMessage && (
              <p className="mt-4 text-center text-sm text-green-400">{responseMessage}</p>
            )}
          </div>

          {/* Lottie Animation Section */}
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
            <div className="w-[250px] h-[300px]">
              <DotLottieReact
                src="https://lottie.host/634cdffd-9486-4ad9-9bf5-15c58c50dee2/RpzB8bZNY4.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          {/* Feedback Count Display */}
          <div className="absolute bottom-3 right-3 flex items-center bg-gray-700 px-3 py-2 rounded-xl shadow-lg space-x-2">
            <MessageSquare className="text-blue-400" size={24} />
            <span className="font-semibold text-white">{feedbackCount}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
