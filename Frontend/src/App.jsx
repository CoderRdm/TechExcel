import React from "react";

const App = () => {
  const features = [
    {
      title: "Professional Templates",
      description: "Choose from our collection of ATS-friendly templates designed by HR experts"
    },
    {
      title: "Industry-Specific",
      description: "Tailored resume formats for every industry and career level"
    },
    {
      title: "Easy Customization",
      description: "Intuitive editor with real-time preview and instant downloads"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This resume builder helped me land my dream job at a top tech company!",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content: "The templates are beautiful and the customization options are incredible.",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Resume Builder
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#templates" className="text-gray-600 hover:text-blue-600 transition">
                Templates
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
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
            Stand out from the crowd with our AI-powered resume builder. 
            Choose from expert-designed templates and get hired faster.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full md:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
              Build Your Resume
              <span className="ml-2">→</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Resume Builder?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4 text-4xl text-blue-500 font-bold">
                  {index === 0 && "📄"}
                  {index === 1 && "💼"}
                  {index === 2 && "⚡"}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Professional Resume?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully landed their dream jobs
            using our resume builder.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Resume Builder</h3>
              <p className="text-sm">
                Create professional resumes with our easy-to-use builder and expert templates.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#templates" className="hover:text-white transition">Templates</a></li>
                <li><a href="#examples" className="hover:text-white transition">Examples</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#guides" className="hover:text-white transition">Career Guides</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;