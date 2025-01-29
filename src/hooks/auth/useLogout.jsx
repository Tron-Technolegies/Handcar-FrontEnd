import axios from "axios";
import React, { useContext, useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";
import { UserContext } from "../../UserContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const logoutUser = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/Logout`,
        {},
        { withCredentials: true }
      );
      toast.success("successfully logged out");
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutUser };
};

export default useLogout;
