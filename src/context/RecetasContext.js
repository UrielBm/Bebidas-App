import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();
const RecetasProvider = (props) => {
  const [Recetas, SetRecetas] = useState([]);
  const [Search, SetSearch] = useState({
    ingredient: "",
    category: "",
  });
  const [peticion, SetPeticion] = useState(false);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const GetRecetas = async () => {
      const { ingredient, category } = Search;
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
      );
      SetRecetas(response.data.drinks);
      SetLoading(false);
    };
    if (peticion) {
      GetRecetas();
    }
  }, [Search, peticion]);
  return (
    <RecetasContext.Provider
      value={{ SetSearch, Recetas, SetPeticion, SetLoading, Loading }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
