import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4  ">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-start space-y-6 md:space-y-0  sm:px-10">
          {/* Logo and Address */}
          <div className="md:w-1/3">
            <h2 className="font-bold text-2xl mb-4 text-gray-900">Funiro.</h2>
            <address className="text-gray-500 not-italic leading-relaxed">
              400 University Drive Suite 200 <br />
              Coral Gables, FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div className="flex justify-between md:justify-start md:w-2/3 space-x-16">
            <div>
              <h3 className="text-gray-500 font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-gray-500 font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-auto ">
              <h3 className="text-gray-500 font-semibold mb-4">Newsletter</h3>
              <div className="flex border-b border-gray-400">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 flex-grow focus:outline-none text-gray-700"
                />
                <button className="bg-black text-white px-4 py-2 hover:bg-gray-800">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 text-center text-gray-500">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

