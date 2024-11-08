import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoginPage from "../components/loginpage/LoginPage";
import SignUpPage from "../components/loginpage/SignUpPage";
import OTPLogin from "../components/loginpage/OTPLogin";
import EnterOtp from "../components/loginpage/EnterOtp";

export default function HomeLayout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showOtpLogin, setShowOtpLogin] = useState(false);
  const [showEnterOtp, setShowEnterOtp] = useState(false);
  return (
    <div className="mx-0">
      <div className="sticky top-0 z-50">
        <Header setShowPopup={setShowLogin} setSignupPopup={setShowSignup} />
      </div>
      {showLogin && (
        <LoginPage
          setShowLogin={setShowLogin}
          setShowSignup={setShowSignup}
          setShowOtpLogin={setShowOtpLogin}
        />
      )}
      {showSignup && (
        <SignUpPage setShowSignUp={setShowSignup} setShowLogin={setShowLogin} />
      )}
      {showOtpLogin && (
        <OTPLogin
          setShowOtpLogin={setShowOtpLogin}
          setShowEnterOtp={setShowEnterOtp}
        />
      )}
      {showEnterOtp && <EnterOtp setShowEnterOtp={setShowEnterOtp} />}
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
