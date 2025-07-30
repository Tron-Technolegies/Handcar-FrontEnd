// import React from "react";
// import car_accessories from "../../../assets/car_accessories.png";
// import car_image from "../../../assets/car_image.png";
// import third_featureimg from "../../../assets/third_featureimg.png";
// import { handleEnquiry } from "../../../utils/WhatsApp";
// import HandCarFeatureCard from "./HandCarFeatureCard";

// const HandCarFeatures = () => {
//   const buttonAction = () => {
//     handleEnquiry({
//       name: "I would like to enquire about various spare parts",
//     });
//   };

//   return (
//     <div className="bg-white flex flex-col md:flex-row gap-6 lg:px-[120px] px-6 py-10">
//       {/* Left Large Card */}
//       <div className="md:w-1/2 w-full">
//         <HandCarFeatureCard
//           title="Best Car Accessories from Top Brands"
//           description="Discover stylish, durable, and high-performance accessories to enhance your car's look and feel."
//           buttonText="View Products"
//           type="link"
//           action="/accessories"
//           image={car_accessories}
//           imageSize="w-80 h-70"
//           isLarge
//         />
//       </div>

//       {/* Right Two Cards */}
//       <div className="md:w-1/2 w-full flex flex-col gap-6">
//         <HandCarFeatureCard
//           title="Affordable Car Services"
//           description="Book reliable car maintenance and repair services from trusted experts near you."
//           buttonText="Find Services"
//           type="link"
//           action="/servicepage"
//           image={car_image}
//           imageSize="w-40 h-40"
//         />

//         <HandCarFeatureCard
//           title="Top-Quality Spare Parts"
//           description="Explore genuine spare parts designed to fit and perform perfectly in your vehicle."
//           buttonText="Enquire Now"
//           type="button"
//           action={buttonAction}
//           image={third_featureimg}
//           imageSize="w-36 h-36"
//         />
//       </div>
//     </div>
//   );
// };

// export default HandCarFeatures;
import React from "react";
import car_accessories from "../../../assets/car_accessories.png";
import car_image from "../../../assets/car_image.png";
import third_featureimg from "../../../assets/third_featureimg.png";
import { handleEnquiry } from "../../../utils/WhatsApp";
import HandCarFeatureCard from "./HandCarFeatureCard";

const HandCarFeatures = () => {
  const buttonAction = () => {
    handleEnquiry({
      name: "I would like to enquire about various spare parts",
    });
  };

  return (
    <div className="bg-white flex flex-col md:flex-row gap-6 lg:px-[120px] px-6 py-10">
      {/* Left Large Card */}
      <div className="md:w-1/2 w-full">
        <HandCarFeatureCard
          title="Best Car Accessories from Top Brands"
          description="Discover stylish, durable, and high-performance accessories to enhance your car's look and feel."
          buttonText="View Products"
          type="link"
          action="/accessories"
          image={car_accessories}
          imageSize="w-52 h-44 md:w-80 md:h-70"
          isLarge
        />
      </div>

      {/* Right Two Cards */}
      <div className="md:w-1/2 w-full flex flex-col gap-6">
        <HandCarFeatureCard
          title="Affordable Car Services"
          description="Book reliable car maintenance and repair services from trusted experts near you."
          buttonText="Find Services"
          type="link"
          action="/servicepage"
          image={car_image}
          imageSize="w-28 h-28 md:w-40 md:h-40"
        />
        <HandCarFeatureCard
          title="Top-Quality Spare Parts"
          description="Explore genuine spare parts designed to fit and perform perfectly in your vehicle."
          buttonText="Enquire Now"
          type="button"
          action={buttonAction}
          image={third_featureimg}
          imageSize="w-24 h-24 md:w-36 md:h-36"
        />
      </div>
    </div>
  );
};

export default HandCarFeatures;
