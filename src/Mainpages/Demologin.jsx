import React, { useState } from 'react';
import './login.css';

const MobileLoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleLogin = () => {
    // Handle mobile login logic, e.g., sending OTP and verifying it.
  };

  return (
    <div className="body">
      <div className="screen-1">
        <div className="logo">
          {/* SVG content for logo */}
        </div>
        <div className="mobile">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <div className="sec-2">
            <ion-icon name="call-outline"></ion-icon>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
          </div>
        </div>
        <div className="otp">
          <label htmlFor="otp">OTP</label>
          <div className="sec-2">
            <ion-icon name="key-outline"></ion-icon>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
        </div>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
        <div className="footer">
          <span>Sign up</span>
          <span>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};

export default MobileLoginScreen;
