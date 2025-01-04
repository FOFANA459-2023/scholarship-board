import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../componets/supabaseClient"; // Adjust the import path as needed

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails
  
    setIsSubmitting(true);
    setSubmitError("");
  
    try {
      // Insert data into Supabase (only name, email, and message)
      const { data, error } = await supabase
        .from("contact")
        .insert([{ name: formData.name, email: formData.email, message: formData.message }])
        .select();
  
      if (error) throw error;
  
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setErrors({}); // Clear errors
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Empowering Liberian Students Through Education
        </h1>
        <p className="text-xl mb-8">
          Find scholarships, grants, and opportunities to achieve your academic
          dreams.
        </p>
        <div className="space-x-4">
          <Link to="/scholarship-list">
            <a
              href="#scholarships"
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700"
            >
              Explore Scholarships
            </a>
          </Link>

          <Link>
            <a
              href="#apply"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg hover:bg-gray-100"
            >
              Support Us
            </a>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-white text-blue-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-lg">
              <p className="mb-4">
                The Liberia Scholarship Board is dedicated to providing Liberian
                students with access to quality education through scholarships,
                grants, and mentorship programs.
              </p>
              <p>
                Our mission is to empower the next generation of leaders,
                innovators, and change-makers in Liberia.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section id="scholarships" className="bg-blue-50 text-blue-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Scholarships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">
                Undergraduate Scholarships
              </h3>
              <p className="mb-4">
                Full and partial scholarships for undergraduate students
                pursuing degrees in various fields.
              </p>
              <Link to="/scholarship-list">
                <a
                  href="#learn-more"
                  className="text-red-600 hover:text-red-700"
                >
                  Learn More →
                </a>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Graduate Scholarships</h3>
              <p className="mb-4">
                Funding opportunities for graduate students to pursue master's
                and doctoral degrees.
              </p>
              <Link to="/scholarship-list">
                <a
                  href="#learn-more"
                  className="text-red-600 hover:text-red-700"
                >
                  Learn More →
                </a>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">STEM Scholarships</h3>
              <p className="mb-4">
                Special scholarships for students in Science, Technology,
                Engineering, and Mathematics.
              </p>

              <Link to="/scholarship-list">
                <a
                  href="#learn-more"
                  className="text-red-600 hover:text-red-700"
                >
                  Learn More →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="bg-white text-blue-900 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
    <p className="text-lg text-center text-blue-700 mb-8">
      Have questions or need support? We're here to help! Reach out to us, and we'll get back to you as soon as possible.
    </p>
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-blue-900 to-red-800 p-1 rounded-lg shadow-xl">
        <div className="bg-white p-8 rounded-lg">
          {submitSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
              Message submitted successfully! An admin will reach out to you shortly.
            </div>
          )}
          {submitError && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Your message..."
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default LandingPage;