import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-start  sm:gap-10 justify-center p-8 md:p-16 w-full md:w-4/5 lg:w-9/10 mx-auto">
      {/* Contact Information Section */}
      <div className="mb-8 md:mb-0 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-500 mb-6">
          For more information about our products & services, please feel free to drop us
          an email. Our staff is always there to help you out. Do not hesitate!
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <span className="text-2xl">📍</span>
            <div>
              <h4 className="font-bold">Address</h4>
              <p className="text-gray-500">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-2xl">📞</span>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="text-gray-500">Mobile: (+84) 546-6789</p>
              <p className="text-gray-500">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-2xl">⏰</span>
            <div>
              <h4 className="font-bold">Working Time</h4>
              <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-500">Saturday-Sunday: 9:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              id="name"
              type="text"
              placeholder="Abc"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              id="email"
              type="email"
              placeholder="Abc@jdf.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              id="subject"
              type="text"
              placeholder="This is an optional"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              id="message"
              rows="4"
              placeholder="Hi! I'd like to ask about ..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
