import React, { useState } from 'react';

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
  };

  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-900 text-white p-8">
        <div className="w-full max-w-5xl bg-[#291910] p-12 rounded-2xl">
          <form className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 space-y-4">
              <div>
                <label className="block text-md mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full border-none px-3 py-2 border rounded-md text-white"
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
                  className="w-full px-3 border-none py-2 border rounded-md text-white"
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
                  className="w-full px-3 py-2 border rounded-md border-none text-white"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="service">
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md border-none text-white"
                  type="text"
                  id="service"
                  name="service"
                  placeholder=""
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4 space-y-4">
              <div>
                <label className="block text-md mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 px-3 py-2 border rounded-md border-none text-white"
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
            <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
              Get An Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-40 bg-orange-700"></div>
    </>
  );
};

export default Appointment;
