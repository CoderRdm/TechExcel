import React, { useState } from "react";
import { SignUpPage, LoginPage } from "./auth-pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  if (currentPage === "signup") {
    return <SignUpPage onBackToHome={() => setCurrentPage("home")} />;
  }

  if (currentPage === "login") {
    return <LoginPage onBackToHome={() => setCurrentPage("home")} />;
  }

  const features = [
    {
      title: "Professional Templates",
      description: "Choose from our collection of ATS-friendly templates designed by HR experts.",
    },
    {
      title: "Industry-Specific",
      description: "Tailored resume formats for every industry and career level.",
    },
    {
      title: "Easy Customization",
      description: "Intuitive editor with real-time preview and instant downloads.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This resume builder helped me land my dream job at a top tech company!",
      image: "/api/placeholder/64/64",
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content: "The templates are beautiful and the customization options are incredible.",
      image: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button onClick={() => setCurrentPage("home")} className="text-2xl font-bold text-blue-600">
            Resume Builder
          </button>
          <div className="hidden md:flex space-x-8">
            <a href="#templates" className="text-gray-600 hover:text-blue-600 transition">Templates</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentPage("login")} className="hidden md:block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Sign In
            </button>
            <button onClick={() => setCurrentPage("signup")} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Create a Professional Resume<br />in Minutes
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stand out from the crowd with our AI-powered resume builder. Choose from expert-designed templates and get hired faster.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={() => setCurrentPage("signup")} className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
              Build Your Resume →
            </button>
            <button className="w-full md:w-auto px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              View Examples
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Resume Builder?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex items-center mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
