import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, Setcategories] = useState([]);
  useEffect(() => {
    const GetCategories = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      Setcategories(response.data.drinks);
    };
    GetCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
