import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../General/Subtitle";
import Spinner from "../General/Spinner";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 272,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 25,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "100%",
    maxHeight: 500,
    display: "block",
    outline: "none",
  },
  header: {
    padding: "12px 0",
    borderBottom: "1px solid darkgrey",
  },
  content: {
    padding: "12px 0",
  },
  wrapperInfoGeneral: {
    margin: "1rem 0",
    fontWeight: "300",
  },
  list: {
    fontWeight: "300",
    fontSize: ".8rem",
  },
  wrapperImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 272,
  },
  img: {
    width: 200,
    borderRadius: "2rem",
    height: 250,
  },
  wrapperSpinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Card = ({ drink }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ArrayIngredient = (receta) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {receta[`strIngredient${i}`]}- {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };
  const { strDrinkThumb, strDrink, idDrink } = drink;
  const {
    setIdDrink,
    receta,
    setReceta,
    SetRecetaLoading,
    RecetaLoading,
  } = useContext(ModalContext);
  return (
    <article id={idDrink} className="card">
      <section className="wrapperImg">
        <img src={strDrinkThumb} alt="dink" className="img" />
      </section>
      <section className="wrapperData">
        <p className="text">{strDrink}</p>
      </section>
      <div className="wrapperButton">
        <button
          className="button"
          onClick={() => {
            setIdDrink(idDrink);
            handleOpen();
            SetRecetaLoading(true);
          }}
        >
          Mostrar receta
        </button>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setIdDrink(null);
          setReceta({});
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          {RecetaLoading ? (
            <div className={classes.wrapperSpinner}>
              <Spinner />
            </div>
          ) : (
            <>
              <section className={classes.header}>
                <Subtitle subtitle={receta.strDrink} />
              </section>
              <section className={classes.content}>
                <div className={classes.wrapperInfoGeneral}>
                  <p>Type: {receta.strCategory}</p>
                  <p>
                    Con alcohol:{" "}
                    {receta.strAlcoholic === "Alcoholic" ? (
                      <span className="green">Yes</span>
                    ) : (
                      <span className="red">No</span>
                    )}
                  </p>
                </div>
                <div>
                  <h3>Instrucciones:</h3>
                  <p>{receta.strInstructions}</p>
                </div>
                <div>
                  <h3>Ingredientes:</h3>
                  <ul className={classes.list}>{ArrayIngredient(receta)}</ul>
                </div>
                <div className={classes.wrapperImg}>
                  <img
                    src={receta.strDrinkThumb}
                    alt="bebida"
                    className={classes.img}
                  />
                </div>
              </section>
            </>
          )}
        </div>
      </Modal>
    </article>
  );
};

export default Card;
