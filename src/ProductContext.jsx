import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [min_price, setMin_price] = useState("");
  const [max_price, setMax_price] = useState("");
  const [sort, setSort] = useState("");

  return (
    <ProductContext.Provider
      value={{
        search,
        setSearch,
        brand,
        setBrand,
        category,
        setCategory,
        min_price,
        setMin_price,
        max_price,
        setMax_price,
        sort,
        setSort,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
