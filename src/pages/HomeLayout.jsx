import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoginPage from "../components/loginpage/LoginPage";
import SignUpPage from "../components/loginpage/SignUpPage";
import OTPLogin from "../components/loginpage/OTPLogin";
import EnterOtp from "../components/loginpage/EnterOtp";
import { UserContext } from "../UserContext";

export default function HomeLayout() {
  const { showLogin, showSignup, showEnterOtp, showOtpLogin } =
    useContext(UserContext);
  return (
    <div className="mx-0">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {showLogin && <LoginPage />}
      {showSignup && <SignUpPage />}
      {showOtpLogin && <OTPLogin />}
      {showEnterOtp && <EnterOtp />}
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
