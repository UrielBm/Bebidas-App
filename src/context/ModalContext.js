import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idDrink, setIdDrink] = useState(null);
  const [receta, setReceta] = useState({});
  const [RecetaLoading, SetRecetaLoading] = useState(false);
  useEffect(() => {
    const GetDrink = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      setReceta(response.data.drinks[0]);
      SetRecetaLoading(false);
    };
    if (idDrink !== null) {
      GetDrink();
    }
  }, [idDrink]);
  return (
    <ModalContext.Provider
      value={{ setIdDrink, receta, setReceta, SetRecetaLoading, RecetaLoading }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
