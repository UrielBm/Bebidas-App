import Form from "./components/Form";
import Header from "./components/General/Header";
import "./App.scss";
import CategoriesProvider from "./context/CategoryContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";
import ListDrinks from "./components/ListDrinks";
function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <RecetasProvider>
          <ModalProvider>
            <Header />
            <section className="wrapperSection">
              <Form />
            </section>
            <main className="wrapperMain">
              <ListDrinks />
            </main>
          </ModalProvider>
        </RecetasProvider>
      </CategoriesProvider>
    </div>
  );
}

export default App;
