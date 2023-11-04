import React, { useState, useEffect } from 'react';
import './login.css';
import axios from 'axios';
import Header from '../Component/Headers/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    let countdown;

    if (otpSent) {
      countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        }
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(countdown);
      setOtpSent(false);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [otpSent, timer]);

  const handleSendOTP = async (e) => {
    
  
    const requestData = {
      mobileNo: mobileNo,
    };
  
    try {
      const response = await axios.post("http://localhost:7000/otpSend", requestData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
  
      console.log("Registration success", response.data);
      setOtpSent(true);
      setTimer(60); // Reset the timer when OTP is sent again
      setError(null); // Reset any previous error messages
    } catch (error) {
      console.log("Registration Failed", error);
      setError("Registration Failed. Please try again."); // Set an error message
    }
  };
  
  const handleLogin = async (e) => {
    
    const requestedData = {
      otp: otp,
    };

    try{
      const response = await axios.post(`http://localhost:7000/login/${mobileNo}`, requestedData, {
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      }});

      console.log("succss", response.data)
      navigate("/home")

    }catch (error){
      console.log("error", error)

    }


   
  };

  return (
    <div className='login-main'>
      <div className='login'>
        <div className='login-page'>
          <h2>
            <strong> Login</strong> <br />
            <span> with Mobile Number </span>
          </h2>
          <div>
            <h5>Mobile Number</h5>
            <input
              type='text'
              placeholder='enter mobile number'
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          {otpSent ? (
            <div>
              <div>
                <label>Enter OTP:</label>
                <input
                  type='text'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <p>Time left: {timer} seconds</p>
            </div>
          ) : null}

          {error && <p className="error-message">{error}</p>}

          <button className='btn-login' onClick={otpSent ? handleLogin : handleSendOTP}>
            {otpSent ? 'Login' : 'Send OTP'}
          </button>
          <div className="sing">
            <button> <a href="/sign">Sign up</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
