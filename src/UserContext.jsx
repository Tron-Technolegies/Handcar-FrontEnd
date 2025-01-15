import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showOtpLogin, setShowOtpLogin] = useState(false);
  const [showEnterOtp, setShowEnterOtp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("");
  return (
    <UserContext.Provider
      value={{
        showLogin,
        showSignup,
        showEnterOtp,
        showOtpLogin,
        setShowEnterOtp,
        setShowLogin,
        setShowOtpLogin,
        setShowSignup,
        serviceCategory,
        setServiceCategory,
        showForgotPassword,
        setShowForgotPassword,
        showVerification,
        setShowVerification,
        showNewPassword,
        setShowNewPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
