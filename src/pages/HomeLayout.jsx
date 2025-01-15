import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoginPage from "../components/loginpage/LoginPage";
import SignUpPage from "../components/loginpage/SignUpPage";
import OTPLogin from "../components/loginpage/OTPLogin";
import EnterOtp from "../components/loginpage/EnterOtp";
import { UserContext } from "../UserContext";
import ForgotPassword from "../components/loginpage/ForgotPassword";
import VerificationCode from "../components/loginpage/VerificationCode";
import NewPassword from "../components/loginpage/NewPassword";

export default function HomeLayout() {
  const {
    showLogin,
    showSignup,
    showEnterOtp,
    showOtpLogin,
    showForgotPassword,
    showVerification,
    showNewPassword,
  } = useContext(UserContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        },
        (err) => {
          console.log(err.message);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
        }
      );
    }
  }, []);
  return (
    <div className="mx-0">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {showLogin && <LoginPage />}
      {showSignup && <SignUpPage />}
      {showOtpLogin && <OTPLogin />}
      {showEnterOtp && <EnterOtp />}
      {showForgotPassword && <ForgotPassword />}
      {showVerification && <VerificationCode />}
      {showNewPassword && <NewPassword />}
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
