import React from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";

export default function AddressForm() {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h4 className="text-2xl font-semibold">Add New Address</h4>
      <p>Full Name</p>
      <FormInput type={"text"} />
      <p>Address Line 1</p>
      <FormInput
        type={"text"}
        placeholder={"Street address, company name, c/o"}
      />
      <p>Address Line 2</p>
      <FormInput
        type={"text"}
        placeholder={"Apartment, suite, unit, building, floor, etc."}
      />
      <p>State/Province/Region</p>
      <FormInput type={"text"} />
      <div className="flex gap-3">
        <div className="w-1/2">
          <p>ZIP</p>
          <FormInput type={"number"} />
        </div>
        <div className="w-1/2">
          <p>Country</p>
          <FormInput type={"text"} />
        </div>
      </div>
      <p>Phone Number</p>
      <PhoneInput
        country={"ae"} // Set default country code (UAE in this case)
        inputStyle={{
          padding: "20px",
          paddingLeft: "40px",
          width: "100%",
          borderColor: "#E1E1E1",
          backgroundColor: "#E1E1E1",
          borderRadius: "8px",
        }}
      />
      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white border-2 hover:text-black">
        Add & Choose Address
      </button>
    </div>
  );
}
