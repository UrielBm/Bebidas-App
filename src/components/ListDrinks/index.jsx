import { useContext } from "react";
import { RecetasContext } from "../../context/RecetasContext";
import Subtitle from "../General/Subtitle";
import Spinner from "../General/Spinner";
import Card from "./Card";
import "./style.scss";
const ListDrinks = () => {
  const { Recetas, Loading } = useContext(RecetasContext);
  if (Recetas.length === 0) return null;
  return (
    <div className="wrapperList">
      <div className="wrapperSubtitle">
        <Subtitle subtitle="Listado de Recetas" />
      </div>
      <section className="wrapperCards">
        {Loading ? (
          <Spinner />
        ) : (
          Recetas.map((Drink) => <Card key={Drink.idDrink} drink={Drink} />)
        )}
      </section>
    </div>
  );
};

export default ListDrinks;
