import React from "react";
import carImage from "../../../assets/car.png";

const ServiceOffering = () => {
  return (
    <section className="py-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 ">
          <div className="w-full md:w-1/2">
            <img
              src={"/WhatsApp Image 2025-07-14 at 15.19.42_2f1a34a7.png"}
              className="w-10/12 h-auto object-contain"
              alt="Car Repair"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-bold mb-4">
              Why Major Repairs Are Important for Vehicle Durability
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              It may appear more affordable to skip a major{" "}
              <a href="https://handcar.ae/" target="_blank" rel="noopener noreferrer">
                car repair in Abu Dhabi
              </a>
              , but the costs can add up much quicker than you'd expect. Timely repairs as part of
              your scheduled{" "}
              <a href="https://handcar.ae/" target="_blank" rel="noopener noreferrer">
                car service in Abu Dhabi
              </a>{" "}
              help prevent engine failure, improve fuel economy, and can keep your vehicle running
              for years longer. Addressing major issues early saves you money—and more
              importantly—offers peace of mind.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3">
            <h3 className="text-4xl font-bold mb-4">
              Routine Maintenance Checks for Your Car's Critical Components
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Finding the right{" "}
              <a href="https://handcar.ae/" target="_blank" rel="noopener noreferrer">
                car repair in Abu Dhabi
              </a>{" "}
              is as essential as the repair itself. A reputable provider should have licensed
              technicians, clear service processes, and solid customer reviews. Credentials,
              feedback, and warranties are key signs your car is in good hands.
            </p>
            <p className=" leading-relaxed text-justify mt-1">
              Multi-brand workshops like Handcar offer trusted{" "}
              <a href="https://handcar.ae/" target="_blank" rel="noopener noreferrer">
                car service in Abu Dhabi
              </a>
              , delivering high-quality support for every make and model. Before choosing a
              provider, check Google reviews and local forums to evaluate customer experiences.
            </p>
            <p className=" leading-relaxed text-justify mt-1">
              Most major repairs take 1 to 5 days depending on complexity, parts sourcing, and
              workload. For exotic cars or rare parts, it may take longer—so always ask for a time
              estimate in advance. Lastly, don’t overlook the value of service warranties—they
              ensure your{" "}
              <a href="https://handcar.ae/" target="_blank" rel="noopener noreferrer">
                car maintenance in Abu Dhabi
              </a>{" "}
              remains consistent even after repairs are done.
            </p>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src={"/WhatsApp Image 2025-07-25 at 12.36.46_83943dde.png"}
              className="w-full ml-20 h-auto object-contain"
              alt="Car Maintenance"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffering;
// import React from "react";

// const ServiceOffering = () => {
//   return (
//     <section className="w-full bg-gray-50 text-gray-800 py-16">
//       {/* Section 1 */}
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 w-full px-4 md:px-12 lg:px-20">
//         <div className="w-full md:w-1/2 flex justify-start">
//           <img
//             src={"/public/86.png"}
//             className="w-full max-w-[500px] h-auto object-contain"
//             alt="Car Repair"
//           />
//         </div>
//         <div className="w-full md:w-1/2 pr-4">
//           <h3 className="text-2xl font-semibold mb-4">
//             Why Major Repairs Are Important for Vehicle Durability
//           </h3>
//           <p className="text-gray-600 leading-relaxed text-justify">
//             It may appear more affordable to skip a major{" "}
//             <a
//               href="https://handcar.ae/"
//               className="font-bold hover:text-gray-700 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               car repair in Abu Dhabi
//             </a>
//             , but the costs can add up much quicker than you'd expect. Timely
//             repairs as part of your scheduled{" "}
//             <a
//               href="https://handcar.ae/"
//               className="font-bold hover:text-gray-700 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               car service in Abu Dhabi
//             </a>{" "}
//             help prevent engine failure, improve fuel economy, and can keep
//             your vehicle running for years longer. Addressing major issues
//             early saves you money—and more importantly—offers peace of mind.
//           </p>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 w-full px-4 md:px-12 lg:px-20">
//         <div className="w-full md:w-1/2 pl-4">
//           <h3 className="text-2xl font-semibold mb-4">
//             Routine Maintenance Checks for Your Car's Critical Components
//           </h3>
//           <p className="text-gray-600 leading-relaxed text-justify">
//             Finding the right{" "}
//             <a
//               href="https://handcar.ae/"
//               className="font-bold hover:text-gray-700 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               car repair in Abu Dhabi
//             </a>{" "}
//             is as essential as the repair itself. A reputable provider should
//             have licensed technicians, clear service processes, and solid
//             customer reviews...
//           </p>
//           <p className="text-gray-600 leading-relaxed text-justify mt-4">
//             Multi-brand workshops like Handcar offer trusted{" "}
//             <a
//               href="https://handcar.ae/"
//               className="font-bold hover:text-gray-700 transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               car service in Abu Dhabi
//             </a>
//             , delivering high-quality support for every make and model...
//           </p>
//           <p className="text-gray-600 leading-relaxed text-justify mt-4">
//             Most major repairs take 1 to 5 days depending on complexity...
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 flex justify-end">
//           <img
//             src={"/public/download (6).png"}
//             className="w-full max-w-[500px] h-auto object-contain"
//             alt="Car Maintenance"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceOffering;
