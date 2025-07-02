import React, { useContext, useState } from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import useAddAddress from "../../hooks/cart/useAddAddress";
import { UserContext } from "../../UserContext";

export default function AddressForm({ refetch }) {
  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [floorApartment, setFloorApartment] = useState("");
  const [landmark, setLandmark] = useState("");
  const [areaDistrict, setAreaDistrict] = useState("");
  const [city, setCity] = useState("");
  const [addressType, setAddressType] = useState("Home");

  const { loading, addAddress } = useAddAddress();

  const handleSubmit = async () => {
    await addAddress({
      user: user.id,
      name,
      phone_number: phone,
      street,
      building_name: buildingName,
      floor_apartment_no: floorApartment,
      landmark,
      area_district: areaDistrict,
      city,
      country: "United Arab Emirates",
      address_type: addressType,
    });

    refetch();

    // Reset form
    setName("");
    setPhone("");
    setStreet("");
    setBuildingName("");
    setFloorApartment("");
    setLandmark("");
    setAreaDistrict("");
    setCity("");
    setAddressType("Home");
  };

  return (
    <div className="flex flex-col gap-5 my-5">
      <h4 className="text-2xl font-semibold">Add New Address</h4>

      <p>Full Name</p>
      <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />

      <p>Phone Number</p>
      <PhoneInput
        country={"ae"}
        value={phone}
        onChange={setPhone}
        inputStyle={{
          padding: "20px",
          paddingLeft: "40px",
          width: "100%",
          borderColor: "#E1E1E1",
          backgroundColor: "#E1E1E1",
          borderRadius: "8px",
        }}
      />

      <p>Street</p>
      <FormInput value={street} onChange={(e) => setStreet(e.target.value)} placeholder="e.g. Al Wasl Road" />

      <p>Building Name</p>
      <FormInput value={buildingName} onChange={(e) => setBuildingName(e.target.value)} placeholder="e.g. Marina Tower" />

      <p>Floor & Apartment No.</p>
      <FormInput value={floorApartment} onChange={(e) => setFloorApartment(e.target.value)} placeholder="e.g. 7A, Apt 705" />

      <p>Landmark (Optional)</p>
      <FormInput value={landmark} onChange={(e) => setLandmark(e.target.value)} placeholder="Near Dubai Mall" />

      <p>Area / District</p>
      <FormInput value={areaDistrict} onChange={(e) => setAreaDistrict(e.target.value)} placeholder="e.g. Business Bay" />

      <p>City</p>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-4 rounded-lg border border-gray-300 bg-gray-100"
      >
        <option value="" disabled>Select city</option>
        <option value="Dubai">Dubai</option>
        <option value="Abu Dhabi">Abu Dhabi</option>
        <option value="Sharjah">Sharjah</option>
        <option value="Ajman">Ajman</option>
        <option value="Fujairah">Fujairah</option>
        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
        <option value="Umm Al Quwain">Umm Al Quwain</option>
        <option value="Al Ain">Al Ain</option>
        <option value="Khor Fakkan">Khor Fakkan</option>
        <option value="Dibba Al-Fujairah">Dibba Al-Fujairah</option>
      </select>

      <p>Address Type</p>
      <div className="flex gap-5">
        <label>
          <input
            type="radio"
            name="address_type"
            value="Home"
            checked={addressType === "Home"}
            onChange={() => setAddressType("Home")}
          />
          Home
        </label>
        <label>
          <input
            type="radio"
            name="address_type"
            value="Office"
            checked={addressType === "Office"}
            onChange={() => setAddressType("Office")}
          />
          Office
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-white border-2 hover:text-black"
      >
        Add & Choose Address
      </button>
    </div>
  );
}
