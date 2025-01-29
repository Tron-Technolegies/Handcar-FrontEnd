import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../constants";
import { UserContext } from "../../UserContext";

const useGetUserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const { setUser } = useContext(UserContext);

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/get_logged_in_user`, {
        withCredentials: true,
      });
      const data = res.data;
      setNewUser(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const refetch = () => {
    getUserInfo();
  };

  return { loading, newUser, refetch };
};

export default useGetUserDetails;
