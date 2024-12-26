import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showOtpLogin, setShowOtpLogin] = useState(false);
  const [showEnterOtp, setShowEnterOtp] = useState(false);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
