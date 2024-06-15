import React, { useState } from 'react';
import contactImg from '../public/contac.png'; // Import the image file

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div id="contact-section">

    <div
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col items-center text-white p-8"
      style={{ backgroundImage: `url(${contactImg.src})` }} // Use contactImg.src for the image URL
    >
      <div className="w-full flex flex-col items-center  text-white p-8">
        <div className="w-full max-w-5xl bg-orange-700 p-8 rounded-lg shadow-md">
          <form className="flex flex-col md:flex-row md:space-x-8" onSubmit={handleSubmit}>
            <div className="md:w-1/2 space-y-4 mb-4 md:mb-0">
              <div>
                <label className="block text-md mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full border-none px-3 py-2 rounded-md text-black bg-slate-100"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border-none rounded-md text-black bg-slate-100"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border-none rounded-md text-black bg-slate-100"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 border-none rounded-md text-black bg-slate-100"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter the subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4 mb-4 md:mb-0">
              <div>
                <label className="block text-md mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 px-3 py-2 border-none rounded-md text-black bg-slate-100"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Get An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Appointment;
