import React from "react";

import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SubscriptionPage from "./pages/SubscriptionPage";

import SparePartsPage from "./pages/SparePartsPage";
import ServicePage from "./pages/ServicePage";
import AccessoriesPage from "./pages/AccessoriesPage";
import HomeLayout from "./pages/HomeLayout";
import CartPage from "./pages/CartPage";
import AccessorySinglePage from "./pages/AccessorySinglePage";
import AddressSelectPage from "./pages/AddressSelectPage";
import ErrorPage from "./pages/ErrorPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import WishListPage from "./pages/WishListPage";
import PaintingServiceDetailPopup from "./components/servicepage/vendorService/VendorServiceDetailPopup";
// import AccessoriesShipping from "./components/accessoriespage/accessoriesShipping/AccessoriesShipping";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        // { path: "subscription", element: <SubscriptionPage /> },
        // { path: "accessories", element: <AccessoriesPage /> },
        // { path: "accessories/:id", element: <AccessorySinglePage /> },
        { path: "spareparts", element: <SparePartsPage /> },
        { path: "servicepage", element: <ServicePage /> },
        { path: "servicepage/:id", element: <PaintingServiceDetailPopup /> },
        { path: "cart", element: <CartPage /> },
        { path: "address", element: <AddressSelectPage /> },
        { path: "confirm", element: <ConfirmOrderPage /> },
        { path: "wishlist", element: <WishListPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

// {/* <div>
//       {/* <Header  />
//       <HomePage />
//       <Footer/>  */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contactform" element={<ContactForm/>} />
//           <Route path="/subscription" element={<SubscriptionPage />} />
//           <Route path="/spareparts" element={<SparePartsPage />} />
//           <Route path="/servicepage" element={<ServicePage />} />
//           <Route path="/accessories" element={<AccessoriesPage />} />
//           <Route path="/shipping" element={<AccessoriesShippings />} />
//           <Route path="/profile" element={<ProfileDetails/>} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div> */}
