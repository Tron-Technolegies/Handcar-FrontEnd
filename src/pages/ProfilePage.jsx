import React, { useContext, useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { UserContext } from "../UserContext";
import useUpdateProfile from "../hooks/auth/useUpdateProfile";
import Loading from "../components/Loading";
import useGetUserDetails from "../hooks/auth/useGetUserDetails";

export default function ProfilePage() {
  const { user } = useContext(UserContext);
  const [fName, setFName] = useState(user?.first_name || "");
  const [lName, setLName] = useState(user?.last_name || "");
  const [email, setEmail] = useState(user?.email || "");
  const { loading, updateProfile } = useUpdateProfile();
  const { refetch } = useGetUserDetails();

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFName(user.first_name);
      setLName(user.last_name);
    }
  }, [user]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lg:px-[120px] px-10 py-10 min-h-screen">
      <p className="text-xl font-semibold">My Profile</p>
      <div className="lg:w-1/2 w-full flex flex-col gap-3 my-10">
        <FormInput
          type={"text"}
          title={"First Name"}
          value={fName}
          onchange={(e) => setFName(e.target.value)}
        />
        <FormInput
          type={"text"}
          title={"Last Name"}
          value={lName}
          onchange={(e) => setLName(e.target.value)}
        />
        <FormInput
          type={"email"}
          title={"Email"}
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={async () => {
            await updateProfile({
              first_name: fName,
              last_name: lName,
              email: email,
            });
            refetch();
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-md w-fit hover:bg-red-900 hover:scale-105 ease-in-out duration-300"
        >
          Update
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
