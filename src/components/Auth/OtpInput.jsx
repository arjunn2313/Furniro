import React, { useState } from 'react';

const OTPInput = ({ onVerify }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) { // Assuming OTP is 6 digits long
      // Call the verification function passed as a prop
      onVerify(otp)
        .then(() => {
          setOtp('');
          setError('');
        })
        .catch((err) => {
          setError('Invalid OTP. Please try again.');
        });
    } else {
      setError('OTP must be 6 digits long.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="otp">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleChange}
              className="w-full p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-500"
              placeholder="Enter 6-digit OTP"
              maxLength="6"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
