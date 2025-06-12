import React, { useContext, useState } from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import useAddAddress from "../../hooks/cart/useAddAddress";
import { UserContext } from "../../UserContext";

export default function AddressForm({ refetch }) {
  const [name, setName] = useState("");
  const [ad1, setAd1] = useState("");
  const [ad2, setAd2] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const { loading, addAddress } = useAddAddress();
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-5 my-5">
      <h4 className="text-2xl font-semibold">Add New Address</h4>
      <p>Full Name</p>
      <FormInput
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <p>Address Line 1</p>
      <FormInput
        type={"text"}
        value={ad1}
        onchange={(e) => setAd1(e.target.value)}
        placeholder={"Street address, company name, c/o"}
      />
      <p>Address Line 2</p>
      <FormInput
        type={"text"}
        value={ad2}
        onchange={(e) => setAd2(e.target.value)}
        placeholder={"Apartment, suite, unit, building, floor, etc."}
      />
      <p>State/Province/Region</p>
      <FormInput
        type={"text"}
        value={state}
        onchange={(e) => setState(e.target.value)}
      />
      <div className="flex gap-3">
        <div className="w-1/2">
          <p>ZIP</p>
          <FormInput
            value={zip}
            onchange={(e) => setZip(e.target.value)}
            type={"number"}
          />
        </div>
        <div className="w-1/2">
          <p>Country</p>
          <FormInput
            type={"text"}
            value={country}
            onchange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>
      {/* <p>Phone Number</p>
      <PhoneInput
        country={"ae"} // Set default country code (UAE in this case)
        value={mobile}
        onChange={setMobile}
        inputStyle={{
          padding: "20px",
          paddingLeft: "40px",
          width: "100%",
          borderColor: "#E1E1E1",
          backgroundColor: "#E1E1E1",
          borderRadius: "8px",
        }}
      /> */}
      <button
        onClick={async () => {
          await addAddress({
            name,
            ad1,
            ad2,
            state,
            zip,
            country,
            // phone: mobile,
            id: user.id,
          });
          refetch();
          setName("");
          setAd1("");
          setAd2("");
          setState("");
          setZip("");
          setCountry("");
        }}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white border-2 hover:text-black"
      >
        Add & Choose Address
      </button>
    </div>
  );
}
