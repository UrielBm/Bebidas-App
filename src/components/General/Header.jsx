import Title from "./Title";
import "./Style.scss";

const Header = () => {
  return (
    <header className="wrapperHeader">
      <div className="wrapperTitle">
        <Title title="Buscador de Bebidas" />
      </div>
    </header>
  );
};

export default Header;
