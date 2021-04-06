import "./style.scss";
import Subtitle from "../General/Subtitle";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/CategoryContext";
import { RecetasContext } from "../../context/RecetasContext";
import Error from "../Error/index";
const Form = () => {
  const { categories } = useContext(CategoriesContext);
  const { SetSearch, SetPeticion, SetLoading } = useContext(RecetasContext);
  const [SearchDrinks, SetSearchDrinks] = useState({
    ingredient: "",
    category: "",
  });
  const [error, SetError] = useState(false);
  const handleGetSearch = (e) => {
    const { value, name } = e.target;
    SetSearchDrinks({
      ...SearchDrinks,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim() === "" || category.trim() === "") {
      SetError(true);
      return;
    }
    SetError(false);
    SetSearch(SearchDrinks);
    SetPeticion(true);
    SetLoading(true);
    SetSearchDrinks({
      ingredient: "",
      category: "",
    });
  };
  const { ingredient, category } = SearchDrinks;
  return (
    <section className="wrapperForm">
      <Subtitle subtitle="Busca bedidas por categoria e ingrediente" />
      {error ? <Error text="debes ingresar todos los campos" /> : null}
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="wrapperGroup">
          <label htmlFor="ingredient" className="label">
            Ingrediente:
          </label>
          <input
            id="ingredient"
            name="ingredient"
            className="input"
            value={ingredient}
            placeholder="Buscar por ingrediente"
            onChange={handleGetSearch}
          ></input>
        </div>
        <div className="wrapperGroup">
          <label htmlFor="category" className="label">
            Categoria:
          </label>
          <select
            id="category"
            className="select"
            name="category"
            value={category}
            onChange={handleGetSearch}
          >
            <option value="">--Select a Category--</option>
            {categories.map((drink) => {
              return (
                <option key={drink.strCategory} value={drink.strCategory}>
                  {drink.strCategory}
                </option>
              );
            })}
          </select>
        </div>
        <div className="wrapperButton">
          <button type="submit" className="button">
            Buscar Bebidas
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
